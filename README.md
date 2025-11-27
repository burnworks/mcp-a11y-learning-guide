# mcp-a11y-learning-guide

> [!NOTE]
> 実験色が強い MCP サーバです。やりたいことは以下の通りなのですが、なかなか狙い通りに回答が出ないかもしれません。

ウェブアクセシビリティ学習者を公式ドキュメントへ案内する MCP サーバです。AI は解説者ではなく「ガイド役」として、必要な W3C リソースを提示します。

対象は WCAG （JIS X 8341-3） を学習したい方。単純に AI に質問してしまうと、AI は公式のガイドラインだけでなく、様々な情報を Web から検索したりして答えて来てしまいますし、聞いていないことまで長々と解説してきたりしてあまり学習にはなりません。

そこで、AI になるべく独自解説させず、「公式ドキュメントのここを見るといいよ」というアドバイスだけを返すようにできないかと色々と試している MCP サーバです。

## 特徴
- 🎯 ガイド役に特化: 「ここを読んでください」と公式ドキュメントへ誘導
- 📚 公式ソースのみ: W3C/WAICの許可ドメインだけを参照
- 🔍 効率的な検索: マッピングに基づき必要箇所を優先度付きで提示
- ✅ 学習パス提示: どの順で読むべきかを明示

## 設計原則
1. 解説者ではなくガイド役 ― 長々と説明せず、公式ドキュメントを案内
2. 情報源を厳密に制限 ― 許可ドメイン外は提示しない
3. 効率的な学習支援 ― 必読/推奨/補足を整理し、学習パスを示す

mappings 内にガイドのためのマッピングファイルを作って、AI の回答をある意味制限することで上記を実現しようとしているのですが、マッピングファイルだけですべての質問パターンに対応するのは難しいため、狙ったとおりの回答にならないことが多く悩み中。

何かいいアイデアあれば教えてください。

## 使い方

### インストール
```bash
git clone https://github.com/burnworks/mcp-a11y-learning-guide.git
cd mcp-a11y-learning-guide
npm install
npm run build
```

### Claude Desktop の設定例
Claude Desktop の設定ファイル (`claude_desktop_config.json`) を開きます。

#### 設定ファイルの場所
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`
- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`

※ Claude Desktop の「設定」→「管理者」からも設定ファイルを開くことができます。

#### 設定ファイルの例
Claude Desktop の設定ファイル (`claude_desktop_config.json`) も以下のように追記します。`args` には、`dist/index.js` までのフルパスを記述します。

Windows 環境でファイルパスに `\` を含む場合は、`mcp-a11y-learning-guide\\dist\\index.js` のように `\` でエスケープしてください。

```json
{
  "mcpServers": {
    "a11y-learning-guide": {
      "command": "node",
      "args": [
        "/full_path_to/mcp-a11y-learning-guide/dist/index.js"
      ]
    }
  }
}
```

## 利用可能なツール

### search_accessibility_topic
トピックを検索し、公式ドキュメントを提示します。
- `query` (必須): 例「リンクテキスト」
- `priority_filter` (任意): `all` | `must-read` | `high-priority`

### list_available_topics
利用可能なトピック一覧を取得します。

### get_wcag_criterion
特定の達成基準を取得します。
- `criterion_id` (必須): 例「2.4.4」

## 使用例

MCP サーバを設定していても、いきなり質問をすると、多くの場合、AI は WCAG ドキュメントなどを Web で検索して返答してこようとします。  
まず最初に以下のように、この MCP サーバを使って答えてほしいという点を伝えておくと確実です。

- 「a11y-learning-guide を使用して学習の手伝いをして」
- 「a11y-learning-guide でリンクテキストに関連する達成基準について教えて」
- 「get_wcag_criterion で 2.4.4 を教えて」

など。

その後、学習したい内容を AI に伝えると、a11y-learning-guide の機能を使って答えてくれるはずです。

### AI との会話例

```
ユーザー:
  a11y-learning-guide の機能だけを使用して学習の手伝いをして

応答:
  a11y-learning-guideが利用可能です！このツールでは、WCAGに関する様々なトピックについて、公式ドキュメント（WCAG、Understanding、Techniques）へのリンクとともに情報を提供できます。

ユーザー:
  リンクテキストで気をつけることについて学習したい

応答:
  リンクテキストで気をつけるべきこと

  📋 達成基準の概要
  レベルA（必須）：WCAG 2.4.4

  リンクテキストの意味が文脈から判断できること
  周囲の文章や段落、リストなどと合わせて読めば目的が分かればOK

  レベルAAA（推奨）：WCAG 2.4.9

  リンクテキストだけで目的が判断できること
  前後の文脈がなくても、リンク単体で分かる必要がある

  ✅ 良い実装パターン

  1. H30: リンクの目的を示すリンクテキストを提供
    例：「製品ページへ」「お問い合わせフォーム」

  2. G91: 理解できるリンクテキストを使う
    具体的で明確な表現を使用

  3. ARIA8: aria-labelで補足説明
    視覚的には短く、支援技術には詳しく

  ❌ よくある失敗例

  1. F63: 異なるリンク先に同じテキスト
    悪い例：複数の「詳細」「こちら」リンク

  2. F84: リンクの目的を説明していない
    悪い例：「クリック」「もっと見る」だけ

  3. F89: アクセシブルな名前がない
    悪い例：画像だけのリンクで代替テキストなし

  📖 推奨する学習順序

  1. 達成基準 2.4.4（日本語）で基本要件を理解
  2. Understanding 2.4.4（日本語）で具体例を確認
  3. H30の達成方法（日本語）で実装を学ぶ
  4. F63の失敗例（日本語）で避けるべきパターンを把握
```

## 許可ドメイン（これ以外は参照しません）
- https://www.w3.org/TR/WCAG21/
- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/WCAG21/Understanding/
- https://www.w3.org/WAI/WCAG22/Understanding/
- https://www.w3.org/WAI/WCAG21/Techniques/
- https://www.w3.org/WAI/WCAG22/Techniques/
- https://waic.jp/translations/

## 開発者向け

### マッピングファイルの追加
`mappings/` にYAMLでトピックマッピングを追加します。例として `mappings/links.yaml` を参照してください。

### 開発
```bash
# 開発モード
npm run dev

# ビルド
npm run build

# テスト（Vitest）
npm test
```

### 運用上の注意
- マッピングは起動時にキャッシュします。ファイルを追加・編集した場合はサーバーを再起動してください。
- URLのホワイトリストはコードに埋め込んでいます（WCAG 2.1/2.2 の TR, Understanding, Techniques および WAIC邦訳）。許可外ドメイン・パスは無効になります。

## ライセンス
MIT
