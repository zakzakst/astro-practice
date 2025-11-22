import type { FC } from "react";
import { useState } from "react";
import styles from "./styles.module.css";
import "./reset.css";
import { ImageUploader } from "../parts/ImageUploader";

type ImageItem = {
  id: string;
  image: string;
};

export const Content: FC = () => {
  // NOTE: ドラックドロップの実装慣れていないので、コンポーネント分割は後回し
  const [imageItems, setImageItems] = useState<ImageItem[]>([]);

  const handleAddImages = (addImages: string[]) => {
    const addImageItems = addImages.map((addImage, index) => {
      const date = new Date();
      return {
        id: `${date.getTime()}_${index}`,
        image: addImage,
      };
    });
    setImageItems((currentImageItems) => [
      ...currentImageItems,
      ...addImageItems,
    ]);
  };

  const handleDeleteImage = (id: string) => {
    setImageItems((currentImageItems) => {
      return currentImageItems.filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <ImageUploader onAddImages={(images) => handleAddImages(images)} />
      {!!imageItems.length && (
        <ul className={styles.list}>
          {imageItems.map((item) => (
            <li key={item.id} className={styles.listItem}>
              <span className={styles.listItemThumbnail}>
                <img src={item.image} alt="" />
              </span>
              <button
                type="button"
                className={styles.listItemDelete}
                onClick={() => handleDeleteImage(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
