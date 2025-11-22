import type { ChangeEvent, DragEvent, FC } from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const getImageFileUrls = (files: FileList): string[] => {
  const result = Array.from(files)
    .filter((f) => f.type.startsWith("image/"))
    .map((file) => URL.createObjectURL(file));
  return result;
};

type ImageUploaderProps = {
  onAddImages: (images: string[]) => void;
};

export const ImageUploader: FC<ImageUploaderProps> = ({ onAddImages }) => {
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const handleDragOver = (e: DragEvent) => {
    // ドロップを許可するためにデフォルト動作を抑止
    e.preventDefault();
  };

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    // TODO: 画像以外がドラッグされている場合に色が変わらないようにする
    // ⇒ 調べてみたが、実装が難しそうなので、ドロップ時に「対応するデータでない」メッセージを出すことで対応
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragActive(false);
    const files = e.dataTransfer.files;
    const images = getImageFileUrls(files);
    if (!images.length) {
      alert("画像をドラッグアンドドロップしてください");
      return;
    }
    onAddImages(images);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const images = getImageFileUrls(files);
    if (!images.length) return;
    onAddImages(images);
    // 処理後に input に保持されているファイルをクリア
    e.currentTarget.value = "";
  };

  return (
    <p
      className={styles.dragArea}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      data-drag-active={isDragActive}
    >
      <p>画像をドラックアンドドロップ</p>
      <label className={styles.inputButton}>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleInputChange}
          className={styles.input}
        />
        画像を選択する
      </label>
    </p>
  );
};
