import Link from "next/link";
import useSettings from "../context/hooks/use-settings";
import { Item } from "chillhood";

export interface ItemList {
  items: Item[];
}

export const ItemList = ({ items }: ItemList) => {
  return (
    <div className="items">
      {items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
      <style jsx>{`
        .items {
          display: flex;
          flex-direction: row;
          padding: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export interface CardItemProps {
  item: Item;
}

export const CardItem = ({ item }: CardItemProps) => {
  const settings = useSettings();

  if (!settings.ready) {
    return null;
  }

  if (!item.pictures || !item.pictures.length) {
    return null;
  }

  const img = settings.cloudinary?.url(item.pictures[0].reference, {
    width: 430,
    height: 520,
    crop: "pad",
  });

  return (
    <Link href={"/items/" + item.slug} as={"/items/" + item.slug}>
      <div className="item">
        <div className="item-picture">
          <div className="item-overlay">
            <div className="item-overlay-content">
              <div className="item-overlay-background" />
              <div className="item-overlay-link">
                <i className="material-icons-outlined">add</i>
              </div>
            </div>
          </div>
          <img src={img} alt="" />
        </div>
        <div className="item-info">
          <h4 className="item-name">{item.name}</h4>
          <span className="item-price">CO${item.price.toLocaleString()}</span>
        </div>
        <style jsx>{`
          .item {
            border: 2px solid var(--border-secondary);
            overflow: hidden;
            border-radius: 0.5rem;
            width: 100%;
            margin: 0.5rem;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.125);
            background-color: var(--bg-secondary);
            cursor: pointer;
          }

          .item:hover {
            box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
          }

          .item-picture {
            background: white;
            text-align: center;
            position: relative;
          }
          .item-picture img {
            width: 100%;
            height: auto;
          }
          .item-info {
            padding: 0.25rem;
            text-align: center;
            heigth: 100%;
          }

          .item-price {
            color: var(--text-primary);
            font-weight: bold;
            font-size: 1rem;
          }
          .item-name {
            margin: 0.5rem;
            font-size: 1rem;
          }

          .item-overlay {
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            transition: opacity 0.5s;
          }

          .item-overlay:hover {
            opacity: 1;
          }

          .item-overlay-content {
            height: 100%;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .item-overlay-background {
            background-color: var(--bg-hover-primary);
            height: 100%;
            width: 100%;
            position: absolute;
            opacity: 0.5;
          }

          .item-overlay-link {
            z-index: 10;
            color: var(--text-light);
            border: 2px solid var(--border-light);
            background: transparent;
            text-decoration: var(--text-decoration-primary);
            cursor: pointer;
            padding: 1rem;
            border-radius: 50%;
            transition: all 0.5s;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
          }

          .item-overlay-link i {
            font-size: 4rem;
          }

          .item-overlay-link:hover {
            background: var(--bg-light);
            color: var(--text-primary);
            padding: 0.125rem;
          }

          @media (min-width: 640px) {
            .item {
              max-width: 23%;
            }
          }

          @media (mid-width: 768px) {
            .item-overlay-link i {
              font-size: 8rem;
            }
          }
        `}</style>
      </div>
    </Link>
  );
};
export default ItemList;
