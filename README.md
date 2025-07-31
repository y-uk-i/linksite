# ゆきのリンク集

シンプルでポップなデザインのリンク集アプリです。X（旧Twitter）、YouTube、CNPトレカのリンクを表示します。

## 機能

- X、YouTube、CNPトレカ公式ショップへのリンク
- スマホ対応のレスポンシブデザイン
- ポップでカラフルなUI
- Coming Soonセクション（今後のリンク追加用）

## インストール方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm start
```

## ビルド方法

```bash
# 本番用ビルド
npm run build
```

## Vercelへのデプロイ

1. [Vercel](https://vercel.com/)にアカウント登録
2. GitHubなどのリポジトリにコードをプッシュ
3. Vercelでリポジトリを選択してデプロイ

または、Vercel CLIを使用:

```bash
# Vercel CLIのインストール
npm install -g vercel

# デプロイ
vercel
```

## カスタマイズ方法

- `src/App.js`: リンクの追加・編集
- `src/components/`: コンポーネントの編集
- `src/App.css`: 全体のスタイル変更
- `src/components/*.css`: 各コンポーネントのスタイル変更
