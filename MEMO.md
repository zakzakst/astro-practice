### 調べる

### 済
- biomeの設定方法
  - organizeImportsをフォーマット時に反映させる
    ⇒ biome checkでできた
  - cssのフォーマット設定
    - プロパティの並び順
    - ショートハンドの設定
    ⇒ biomeだとできないらしい（module.css用の処理作成する）

### 参考
- https://www.pokemon.co.jp/ex/legends_z-a/ja/

### 確認済
- https://qiita.com/adatara/items/e2d5598cd2a507c54b21

### module.cssのフォーマット判断
- biomeでは細かいcssのフォーマットができない
- stylelintはデフォルトではインデント調整ができない
- stylelintでbiomeを実行することはできない
- prettierはstylelintで実行できるが、biome設定との住みわけがわかりにくくなりそう
- @stylistic/stylelint-pluginを利用してインデント修正を実行することにした