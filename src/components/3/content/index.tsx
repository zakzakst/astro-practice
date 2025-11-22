import type { FC } from "react";
import { useState } from "react";
import "./reset.css";
import { ImageUploader } from "../parts/ImageUploader";

export const Content: FC = () => {
  const [images, setImages] = useState<string[]>([]);

  // NOTE: ドラックドロップの実装慣れていないので、コンポーネント分割は後回し
  return (
    <>
      <ImageUploader onAddImages={(images) => setImages(images)} />
      {!!images.length && (
        <ul>
          {images.map((image) => (
            <li key={image}>
              <img src={image} alt="" />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
