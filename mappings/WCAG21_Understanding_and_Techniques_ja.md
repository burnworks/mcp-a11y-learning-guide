# WCAG 2.1 解説書および、達成基準別テクニックのリンク一覧

## 知覚可能

### [1.1 テキストによる代替](https://waic.jp/translations/WCAG21/Understanding/text-alternatives.html)

#### [1.1.1 非テキストコンテンツ](https://waic.jp/translations/WCAG21/Understanding/non-text-content.html)

適合レベル A

##### 十分な達成方法

###### 状況 A: 短い説明が非テキストコンテンツと同じ目的を果たし、かつ同じ情報を提示できる場合

- [G94: 非テキストコンテンツに対して、それと同じ目的を果たし、かつ同じ情報を示す、短いテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G94)

**状況 A における短いテキストによる代替の達成方法**

- [ARIA6: オブジェクトのラベルを提供するために aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: 非テキストコンテンツに対してテキストによる代替を提供するために aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA10)
- [G196: 画像のグループにある一つの画像に、そのグループのすべての画像を説明するテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G196)
- [H2: 同じリソースに対して隣接する画像とテキストリンクを結合する](https://waic.jp/translations/WCAG21/Techniques/html/H2)
- [H35: applet 要素にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H35)
- [H37: img 要素の alt 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H37)
- [H53: object 要素のボディを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H53)
- [H86: ASCII アート、顔文字、及びリート語にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H86)
- [PDF1: PDF 文書の Alt エントリによって画像にテキストによる代替を適用する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF1)

###### 状況 B: 短い説明が非テキストコンテンツと同じ目的を果たせず、かつ同じ情報を提示できない場合 (例: チャート又は図表)

- [G95: 非テキストコンテンツの簡単な説明を提供する、短いテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G95)

**状況 B における短いテキストによる代替の達成方法**

- [ARIA6: オブジェクトのラベルを提供するために aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: 非テキストコンテンツに対してテキストによる代替を提供するために aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA10)
- [G196: 画像のグループにある一つの画像に、そのグループのすべての画像を説明するテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G196)
- [H2: 同じリソースに対して隣接する画像とテキストリンクを結合する](https://waic.jp/translations/WCAG21/Techniques/html/H2)
- [H35: applet 要素にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H35)
- [H37: img 要素の alt 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H37)
- [H53: object 要素のボディを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H53)
- [H86: ASCII アート、顔文字、及びリート語にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H86)
- [PDF1: PDF 文書の Alt エントリによって画像にテキストによる代替を適用する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF1)

**状況 B における長いテキストによる代替の達成方法**

- [ARIA15: 画像の説明を提供するために aria-describedby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA15)
- [G73: 非テキストコンテンツのすぐ隣に別の場所へのリンクを置き、その別の場所で長い説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G73)
- [G74: 短い説明の中で長い説明のある場所を示して、非テキストコンテンツの近くにあるテキストで長い説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G74)
- [G92: 非テキストコンテンツに対して、それと同じ目的を果たし、かつ同じ情報を示す長い説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G92)
- [H45: longdesc 属性を用いる](https://waic.jp/translations/WCAG21/Techniques/html/H45)
- [H53: object 要素のボディを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H53)

###### 状況 C: 非テキストコンテンツがコントロールである、又は利用者の入力を受け入れる場合

- [G82: 非テキストコンテンツの目的を特定するテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G82)

**状況 C におけるコントロールと入力のための短いテキストによる代替の達成方法**

- [ARIA6: オブジェクトのラベルを提供するために aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA6)
- [ARIA9: 複数のテキストノードをつなげて一つのラベルにするために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA9)
- [H24: イメージマップの area 要素にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H24)
- [H30: a 要素のリンクの目的を説明するリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/html/H30)
- [H36: 送信ボタンとして用いる画像の alt 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H36)
- [H44: テキストラベルとフォームコントロールを関連付けるために、label 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H44)
- [H65: label 要素を使用できない場合に、フォームコントロールを特定するために、title 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H65)

###### 状況 D: 非テキストコンテンツが時間依存のメディアである (ライブの映像しか含まないコンテンツ及びライブの音声しか含まないコンテンツを含む)、テキストで提示されると無効になるテスト又は演習である、又は、特定の感覚的体験を創り出すことを主に意図しているコンテンツである場合

- [G68: ライブの音声のみのコンテンツ及びライブの映像のみのコンテンツの目的を説明するために、短いテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G68)
- [G100: 非テキストコンテンツの一般に認められた名前 (name) 又は説明的な名前となる短いテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G100)

**状況 D における短いテキストによる代替の達成方法**

- [ARIA6: オブジェクトのラベルを提供するために aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: 非テキストコンテンツに対してテキストによる代替を提供するために aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA10)
- [G196: 画像のグループにある一つの画像に、そのグループのすべての画像を説明するテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G196)
- [H2: 同じリソースに対して隣接する画像とテキストリンクを結合する](https://waic.jp/translations/WCAG21/Techniques/html/H2)
- [H35: applet 要素にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H35)
- [H37: img 要素の alt 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H37)
- [H53: object 要素のボディを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H53)
- [H86: ASCII アート、顔文字、及びリート語にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H86)
- [PDF1: PDF 文書の Alt エントリによって画像にテキストによる代替を適用する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF1)

###### 状況 E: 非テキストコンテンツが CAPTCHA である場合:

- [G143: CAPTCHA の目的を説明するために、テキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G143)
- [G144: 異なるモダリティを用いて同じ目的を果たす、もう一つの CAPTCHA がウェブページに含まれていることを確認する](https://waic.jp/translations/WCAG21/Techniques/general/G144)

###### 状況 F: 非テキストコンテンツを支援技術が無視することが望ましい場合:

**状況 F における必須ではないテキストによる代替を示す達成方法**

- [C9: 装飾目的の画像を付加するために、CSS を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C9)
- [H67: 支援技術が無視すべき画像に対して、img 要素の alt テキストを空にして、title 属性を付与しない](https://waic.jp/translations/WCAG21/Techniques/html/H67)
- [PDF4: PDF 文書の Artifact タグによって装飾的な画像を隠す](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF4)

##### 失敗例

- [F3: 達成基準 1.1.1 の失敗例 － 重要な情報を伝える画像を付加するために、CSS を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F3)
- [F13: 達成基準 1.1.1 及び達成基準 1.4.1 の失敗例 － 画像の色の違いで伝られる情報が含まれないテキストによる代替を持っている](https://waic.jp/translations/WCAG21/Techniques/failures/F13)
- [F20: 達成基準 1.1.1 及び達成基準 4.1.2 の失敗例 － 非テキストコンテンツへの変更が発生するときにテキストによる代替を更新していない](https://waic.jp/translations/WCAG21/Techniques/failures/F20)
- [F30: 達成基準 1.1.1 及び達成基準 1.2.1 の失敗例 － 代替ではないテキストによる代替を使用している (ファイル名、プレースホルダーテキストなど)](https://waic.jp/translations/WCAG21/Techniques/failures/F30)
- [F38: 達成基準 1.1.1 の失敗例 － 支援技術が装飾的な画像を無視できる方法で、HTML でその画像をマークアップしていない](https://waic.jp/translations/WCAG21/Techniques/failures/F38)
- [F39: 達成基準 1.1.1 の失敗例 － 支援技術によって無視されることが望ましい画像に対して、空ではないテキストによる代替を提供している (例: alt="spacer" 又は alt="image")](https://waic.jp/translations/WCAG21/Techniques/failures/F39)
- [F65: 達成基準 1.1.1 の失敗例 － img 要素、area 要素、及び type "image" の input 要素の alt 属性又はテキストによる代替を省略している](https://waic.jp/translations/WCAG21/Techniques/failures/F65)
- [F67: 達成基準 1.1.1 及び達成基準 1.2.1 の失敗例 － 非テキストコンテンツに対して、同じ目的を果たしていない、又は同じ情報を提示していない長い説明を提供している](https://waic.jp/translations/WCAG21/Techniques/failures/F67)
- [F71: 達成基準 1.1.1 の失敗例 － テキストを表すために、テキストによる代替を提供せずに、テキストのようなものを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F71)
- [F72: 達成基準 1.1.1 の失敗例 － テキストによる代替を提供せずに、ASCII アートを用いている](https://waic.jp/translations/WCAG21/Techniques/failures/F72)

### [1.2 時間依存メディア](https://waic.jp/translations/WCAG21/Understanding/time-based-media.html)

#### [1.2.1 音声のみ及び映像のみ (収録済)](https://waic.jp/translations/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html)

適合レベル A

##### 十分な達成方法

###### 状況 A: 収録済の音声しか含まないコンテンツの場合

- [G158: 音声のみの時間依存メディアに対する代替コンテンツを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G158)

###### 状況 B: 収録済の映像しか含まないコンテンツの場合

- [G159: 映像のみの時間依存メディアに対する代替コンテンツを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G159)
- [G166: 重要な映像コンテンツを説明する音声を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G166)

##### 失敗例

- [F30: 達成基準 1.1.1 及び達成基準 1.2.1 の失敗例 － 代替ではないテキストによる代替を使用している (ファイル名、プレースホルダーテキストなど)](https://waic.jp/translations/WCAG21/Techniques/failures/F30)
- [F67: 達成基準 1.1.1 及び達成基準 1.2.1 の失敗例 － 非テキストコンテンツに対して、同じ目的を果たしていない、又は同じ情報を提示していない長い説明を提供している](https://waic.jp/translations/WCAG21/Techniques/failures/F67)

#### [1.2.2 キャプション (収録済)](https://waic.jp/translations/WCAG21/Understanding/captions-prerecorded.html)

適合レベル A

##### 十分な達成方法

- [G93: オープン (常に見える) キャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G93)
- [G87: クローズドキャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G87)
- 次のいずれかのウェブコンテンツ技術特有の達成方法を用いてクローズドキャプションを提供する
   - [SM11: SMIL 1.0 で同期したテキストストリームによるキャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM11)
   - [SM12: SMIL 2.0 で同期したテキストストリームによるキャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM12)
   - [H95: キャプションを提供するために、track 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H95)

##### 失敗例

- [F8: 達成基準 1.2.2 の失敗例 － 一部の会話又は重要な効果音を省略しているキャプション](https://waic.jp/translations/WCAG21/Techniques/failures/F8)
- [F75: 達成基準 1.2.2 の失敗例 － 同期したメディアがページ上にある情報よりも多くの情報を提示するときに、キャプションなしで同期したメディアを提供している](https://waic.jp/translations/WCAG21/Techniques/failures/F75)
- [F74: 達成基準 1.2.2 及び達成基準 1.2.8 の失敗例 － テキストに対する同期したメディアによる代替を、代替としてラベル付けしていない](https://waic.jp/translations/WCAG21/Techniques/failures/F74)

#### [1.2.3 音声解説、又はメディアに対する代替 (収録済)](https://waic.jp/translations/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded.html)

適合レベル A

##### 十分な達成方法

- 次の達成方法のどれか一つを用いて、[G69: 時間依存メディアに対する代替コンテンツを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G69)
    - [G58: 非テキストコンテンツの直後に、時間依存メディアの代替へのリンクを配置する](https://waic.jp/translations/WCAG21/Techniques/general/G58)
- 次の達成方法のどれか一つを用いて、時間の経過に伴って変化するメディアの代替へリンクする
    - [H53: object 要素のボディを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H53)
- [G78: 音声解説を含んだ、利用者が選択可能な副音声トラックを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G78)
- 次のどれか一つを用いて、[G173: 映像の音声解説付きバージョンを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G173)
   - [SM6: SMIL 1.0 で音声解説を提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM6)
   - [SM7: SMIL 2.0 で音声解説を提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM7)
   - 音声及び映像をサポートしているプレーヤーを用いる
- 次のどれか一つを用いて、[G8: 拡張音声解説が付いたムービーを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G8)
   - [SM1: SMIL 1.0 で拡張音声解説を追加する](https://waic.jp/translations/WCAG21/Techniques/smil/SM1)
   - [SM2: SMIL 2.0 で拡張音声解説を追加する](https://waic.jp/translations/WCAG21/Techniques/smil/SM2)
   - 音声及び映像をサポートしているプレーヤーを用いる
- [G203: 話者が話すのみの映像を説明するために、静的なテキストによる代替を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G203)

#### [1.2.4 キャプション (ライブ)](https://waic.jp/translations/WCAG21/Understanding/captions-live.html)

適合レベル AA

##### 十分な達成方法

- 次を同時に満たす
    - [G9: ライブの同期したメディアに対してキャプションを作成する](https://waic.jp/translations/WCAG21/Techniques/general/G9)
    - [G93: オープン (常に見える) キャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G93)
- 次を同時に満たす
    - [G9: ライブの同期したメディアに対してキャプションを作成する](https://waic.jp/translations/WCAG21/Techniques/general/G9)
    - [G87: クローズドキャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G87)
- 次のどれか一つを用いて、ライブの同期したメディアに対してキャプションを作成し、かつクローズドキャプションを提供する
    - [SM11: SMIL 1.0 で同期したテキストストリームによるキャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM11)
    - [SM12: SMIL 2.0 で同期したテキストストリームによるキャプションを提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM12)

#### [1.2.5 音声解説 (収録済)](https://waic.jp/translations/WCAG21/Understanding/audio-description-prerecorded.html)

適合レベル AA

##### 十分な達成方法

- [G78: 音声解説を含んだ、利用者が選択可能な副音声トラックを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G78)
- 次のどれか一つを用いて、[G173: 映像の音声解説付きバージョンを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G173):
   - [SM6: SMIL 1.0 で音声解説を提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM6)
   - [SM7: SMIL 2.0 で音声解説を提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM7)
   - 音声及び映像をサポートしているプレーヤーを用いる
- 次のどれか一つを用いて、[G8: 拡張音声解説が付いたムービーを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G8)
   - [SM1: SMIL 1.0 で拡張音声解説を追加する](https://waic.jp/translations/WCAG21/Techniques/smil/SM1)
   - [SM2: SMIL 2.0 で拡張音声解説を追加する](https://waic.jp/translations/WCAG21/Techniques/smil/SM2)
   - 音声及び映像をサポートしているプレーヤーを用いる
- [G203: 話者が話すのみの映像を説明するために、静的なテキストによる代替を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G203)

#### [1.2.6 手話 (収録済)](https://waic.jp/translations/WCAG21/Understanding/sign-language-prerecorded.html)

適合レベル AAA

##### 十分な達成方法

- [G54: 映像ストリームに手話通訳を含める](https://waic.jp/translations/WCAG21/Techniques/general/G54)
- 次の達成方法の一つを用いて、[G81: プレーヤーによって別のビューポートに表示する、又は画像上に重ねることのできる、手話通訳の同期した映像を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G81)
   - [SM13: SMIL 1.0 で、同期した映像ストリームを通じて手話通訳を提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM13)
   - [SM14: SMIL 2.0 で、同期した映像ストリームを通じて手話通訳を提供する](https://waic.jp/translations/WCAG21/Techniques/smil/SM14)

#### [1.2.7 拡張音声解説 (収録済)](https://waic.jp/translations/WCAG21/Understanding/extended-audio-description-prerecorded.html)

適合レベル AAA

##### 十分な達成方法

- 次のどれか一つを用いて、[G8: 拡張音声解説が付いたムービーを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G8)
   - [SM1: SMIL 1.0 で拡張音声解説を追加する](https://waic.jp/translations/WCAG21/Techniques/smil/SM1)
   - [SM2: SMIL 2.0 で拡張音声解説を追加する](https://waic.jp/translations/WCAG21/Techniques/smil/SM2)
   - 音声及び映像をサポートしているプレーヤーを用いる

#### [1.2.8 メディアに対する代替 (収録済)](https://waic.jp/translations/WCAG21/Understanding/media-alternative-prerecorded.html)

適合レベル AAA

##### 十分な達成方法

###### 状況 A: 収録済の同期したメディアの場合

- 次の達成方法のどれか一つを用いて、[G69: 時間依存メディアに対する代替コンテンツを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G69)
   - [G58: 非テキストコンテンツの直後に、時間依存メディアの代替へのリンクを配置する](https://waic.jp/translations/WCAG21/Techniques/general/G58)
- 次の達成方法のどれか一つを用いて、時間の経過に伴って変化するメディアの代替へリンクする
   - [H53: object 要素のボディを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H53)

###### 状況 B: 収録済の映像しか含まないコンテンツの場合

- [G159: 映像のみの時間依存メディアに対する代替コンテンツを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G159)

##### 失敗例

- [F74: 達成基準 1.2.2 及び達成基準 1.2.8 の失敗例 － テキストに対する同期したメディアによる代替を、代替としてラベル付けしていない](https://waic.jp/translations/WCAG21/Techniques/failures/F74)

#### [1.2.9 音声のみ (ライブ)](https://waic.jp/translations/WCAG21/Understanding/audio-only-live.html)

適合レベル AAA

##### 十分な達成方法

- [G151: 台本に従う場合に、準備された声明又は台本のテキストトランスクリプトへのリンクを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G151)
- [G150: ライブの音声のみのコンテンツに対して、テキストベースの代替コンテンツを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G150)
- [G157: ライブの音声キャプションサービスをウェブページに組み込む](https://waic.jp/translations/WCAG21/Techniques/general/G157)

### [1.3 適応可能](https://waic.jp/translations/WCAG21/Understanding/adaptable.html)

#### [1.3.1 情報及び関係性](https://waic.jp/translations/WCAG21/Understanding/info-and-relationships.html)

適合レベル A

##### 十分な達成方法

###### 状況 A: ウェブコンテンツ技術が、表現によって伝えている情報及び関係性をプログラムによる解釈が可能になるセマンテックな構造を提供している場合

- [ARIA11: ページのリージョンを特定するために ARIA ランドマークを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA11)
- [ARIA12: 見出しを特定するために role=heading を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA12)
- [ARIA13: リージョンとランドマークに名前 (name) を付けるために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA13)
- [ARIA16: ユーザインタフェース コントロールの名前 (name) を提供するために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA16)
- [ARIA17: 関連するフォームコントロールを特定するために、グルーピングロールを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA17)
- [ARIA20: ページのリージョンを特定するために region ロールを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA20)
- [G115: 構造をマークアップするために、セマンティックな要素を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G115)、かつ [H49: 強調又は特別なテキストをマークアップするために、セマンティックなマークアップを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H49)
- [G117: テキストの提示のバリエーションによって伝えている情報を伝達するために、テキストを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G117)
- [G140: 異なる提示を可能にするために、情報と構造を表現から分離する](https://waic.jp/translations/WCAG21/Techniques/general/G140)
- [ARIA24: アイコンフォントを意味的に識別するために role="img" を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA24)
- 次の達成方法を用いて、表現によって伝えられている情報及び関係性をプログラムによる解釈が可能になる
    - [G138: 色の手がかりを用いるときは必ず、セマンティックなマークアップを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G138)
    - [H51: 表形式の情報を提示するために、テーブルのマークアップを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H51)
    - [PDF6: PDF 文書でテーブルのマークアップにテーブル要素を使用する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF6)
    - [PDF20: 間違ってタグ付けされているテーブルを修復するために、Adobe Acrobat Pro のテーブルエディタを使用する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF20)
    - [H39: データテーブルのキャプションとデータテーブルを関連付けるために、caption 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H39)
    - [H73: データテーブルの概要を提供するために、table 要素の summary 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H73)
    - [H63: データテーブルで見出しセルとデータセルを関連付けるために、scope 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H63)
    - [H43: データテーブルのデータセルを見出しセルと関連付けるために、id 属性及び headers 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H43)
    - [H44: テキストラベルとフォームコントロールを関連付けるために、label 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H44)
    - [H65: label 要素を使用できない場合に、フォームコントロールを特定するために、title 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H65)
    - [PDF10: PDF 文書内のインタラクティブなフォームコントロールにラベルを付ける](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF10)
    - [PDF12: PDF 文書内のフォームフィールドの名前 (name)、役割 (role)、値 (value) 情報を提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF12)
    - [H71: fieldset 要素及び legend 要素を使用して、フォームコントロールのグループに関する説明を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H71)
    - [H85: select 要素内の option 要素をグループ化するために、optgroup 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H85)
    - [H48: リスト又はリンクのグループに、ol 要素、ul 要素、dl 要素を用いる](https://waic.jp/translations/WCAG21/Techniques/html/H48)
    - [H42: 見出しを特定するために、h1 要素～ h6 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H42)
    - [PDF9: PDF 文書内のコンテンツを見出しタグでマークアップすることによって見出しを作成する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF9)
    - [SCR21: ページにコンテンツを追加するために、Document Object Model (DOM) の機能を使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR21)
    - [PDF11: PDF 文書内で Link アノテーションと /Link 構造要素を使用してリンクとリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF11)
    - [PDF17: PDF 文書に一貫性のあるページ番号を指定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF17)
    - [PDF21: PDF 文書内のリストにリストタグを使用する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF21)
    - [H97: nav 要素を使用して、関連したリンクをグループ化する](https://waic.jp/translations/WCAG21/Techniques/html/H97)

###### 状況 B: ウェブコンテンツ技術が、表現によって伝えている情報及び関係性をプログラムによる解釈が可能になるセマンテックな構造を提供していない場合

- [G117: テキストの提示のバリエーションによって伝えている情報を伝達するために、テキストを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G117)
- 表現によって伝えられている情報及び関係性をプログラムによる解釈が可能になる、又は次の達成方法を用いてテキストで入手可能にする
   - [T1: 段落に、標準的なテキストの書式の表現法を使用する](https://waic.jp/translations/WCAG21/Techniques/text/T1)
   - [T2: リストに、標準的なテキストの書式の表現法を使用する](https://waic.jp/translations/WCAG21/Techniques/text/T2)
   - [T3: 見出しに、標準的なテキストの書式の表現法を使用する](https://waic.jp/translations/WCAG21/Techniques/text/T3)

##### 失敗例

- [F2: 達成基準 1.3.1 の失敗例 － 情報を伝えるために、適切なマークアップ又はテキストを用いずに、テキストの提示の変化を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F2)
- [F33: 達成基準 1.3.1 及び達成基準 1.3.2 の失敗例 － プレーンテキストのコンテンツで複数の段組みを作成するために、空白文字を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F33)
- [F34: 達成基準 1.3.1 及び達成基準 1.3.2 の失敗例 － プレーンテキストのコンテンツでテーブルの書式を整えるために、空白文字を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F34)
- [F42: 達成基準 1.3.1、達成基準 2.1.1、達成基準 2.1.3、又は達成基準 4.1.2 の失敗例 － リンクをエミュレートしている](https://waic.jp/translations/WCAG21/Techniques/failures/F42)
- [F43: 達成基準 1.3.1 の失敗例 － コンテンツにおける関係を表さない方法で、構造的なマークアップを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F43)
- [F46: 達成基準 1.3.1 の失敗例 － レイアウトテーブルで、th 要素、caption 要素、又は空ではない summary 属性を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F46)
- [F48: 達成基準 1.3.1 の失敗例 － 表形式の情報をマークアップするために、pre 要素を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F48)
- [F87: 達成基準 1.3.1 の失敗例 － CSS の ::before 及び ::after 疑似要素並びに 'content' プロパティを用いて、非装飾のコンテンツを挿入している](https://waic.jp/translations/WCAG21/Techniques/failures/F87)
- [F90: 達成基準 1.3.1 の失敗例 － headers 属性及び id 属性によってテーブルの見出しとコンテンツが不正確に関連付けられている](https://waic.jp/translations/WCAG21/Techniques/failures/F90)
- [F91: 達成基準 1.3.1 の失敗例 － テーブルの見出しを正しくマークアップしていない](https://waic.jp/translations/WCAG21/Techniques/failures/F91)
- [F92: 達成基準 1.3.1 の失敗例 － セマンティックな情報を伝えるコンテンツに presentation ロールを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F92)

#### [1.3.2 意味のあるシーケンス](https://waic.jp/translations/WCAG21/Understanding/meaningful-sequence.html)

適合レベル A

##### 十分な達成方法

- ウェブページにあるすべてのコンテンツについて、[G57: コンテンツを意味のあるシーケンスで並べる](https://waic.jp/translations/WCAG21/Techniques/general/G57)
- 次の達成方法のどれか一つを用いて、コンテンツの並び順を意味のあるものにする、かつその並び順については、[G57: コンテンツを意味のあるシーケンスで並べる](https://waic.jp/translations/WCAG21/Techniques/general/G57)
   - [H34: インラインでテキストの方向を混在させるために、Unicode の right-to-left mark (RLM) 又は left-to-right mark (LRM) を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H34)
   - [H56: 入れ子になったテキストの表記方向に伴う問題を解決するために、インライン要素の dir 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H56)
   - [C6: 構造を示すマークアップに基づいてコンテンツを配置する](https://waic.jp/translations/WCAG21/Techniques/css/C6)
   - [C8: 単語内の文字間隔を制御するために、CSS の letter-spacing を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C8)
- [C27: DOM の順序を視覚的順序と一致させる](https://waic.jp/translations/WCAG21/Techniques/css/C27)
- [PDF3: PDF 文書で正しいタブ順序と読み上げ順序を確保する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF3)

##### 失敗例

- [F34: 達成基準 1.3.1 及び達成基準 1.3.2 の失敗例 － プレーンテキストのコンテンツでテーブルの書式を整えるために、空白文字を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F34)
- [F33: 達成基準 1.3.1 及び達成基準 1.3.2 の失敗例 － プレーンテキストのコンテンツで複数の段組みを作成するために、空白文字を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F33)
- [F32: 達成基準 1.3.2 の失敗例 － 単語内の間隔を制御するために、空白文字を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F32)
- [F49: 達成基準 1.3.2 の失敗例 － 線形化したときに、意味を成さない HTML のレイアウトテーブルを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F49)
- [F1: 達成基準 1.3.2 の失敗例 － CSS で情報を配置することにより、コンテンツの意味を変えている](https://waic.jp/translations/WCAG21/Techniques/failures/F1)

#### [1.3.3 感覚的な特徴](https://waic.jp/translations/WCAG21/Understanding/sensory-characteristics.html)

適合レベル A

##### 十分な達成方法

- [G96: 理解するために感覚的な情報のみに依存するような項目に対して、テキストによる識別を別の方法で提供する](https://waic.jp/translations/WCAG21/Techniques/general/G96)

##### 失敗例

- [F14: 達成基準 1.3.3 の失敗例 － 形状又は位置のみでコンテンツを特定している](https://waic.jp/translations/WCAG21/Techniques/failures/F14)
- [F26: 達成基準 1.3.3 の失敗例 － 情報を伝えるために、グラフィカルなシンボルのみを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F26)

#### [1.3.4 表示の向き](https://waic.jp/translations/WCAG21/Understanding/orientation.html)

適合レベル AA

##### 十分な達成方法

- [G214: 別の方法で制限されている、異なる向きのコンテンツへのアクセスを許可するコントロールを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G214)

##### 失敗例

- [F97: 達成基準 1.3.4 の失敗例 － 表示の向きを縦向き (portrait) 又は横向き (landscape) に固定している](https://waic.jp/translations/WCAG21/Techniques/failures/F97)
- [F100: 達成基準 1.3.4 の失敗例 － デバイスの向きを変更するように促すメッセージが表示される](https://waic.jp/translations/WCAG21/Techniques/failures/F100)

#### [1.3.5 入力目的の特定](https://waic.jp/translations/WCAG21/Understanding/identify-input-purpose.html)

適合レベル AA

###### 十分な達成方法

- [H98: HTML 5.2 autocomplete 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H98)

###### 失敗例

- [F107: 達成基準 1.3.5 の失敗例 － 誤った autocomplete 属性値](https://waic.jp/translations/WCAG21/Techniques/failures/F107)

#### [1.3.6 目的の特定](https://waic.jp/translations/WCAG21/Understanding/identify-purpose.html)

適合レベル AAA

##### 十分な達成方法

- アイコン、リージョン、及びユーザインタフェース コンポーネントの目的をプログラム的に示す
- [ARIA11: ページのリージョンを特定するために ARIA ランドマークを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA11)かつ
- microdata を利用してユーザインタフェース コンポーネントをマークアップする

### [1.4 判別可能](https://waic.jp/translations/WCAG21/Understanding/distinguishable.html)

#### [1.4.1 色の使用](https://waic.jp/translations/WCAG21/Understanding/use-of-color.html)

適合レベル A

##### 十分な達成方法

###### 状況 A: 特定の語句、背景、又は他のコンテンツの色を用いて情報を示している場合

- [G14: 色の違いで伝えている情報をテキストでも入手可能にする](https://waic.jp/translations/WCAG21/Techniques/general/G14)
- [G205: 色のついたフォームコントロールのラベルに対して、テキストによる手がかりを含める](https://waic.jp/translations/WCAG21/Techniques/general/G205)
- [G182: 文字色の違いが情報を伝えるために使用される場合に、利用可能な追加の視覚的な手がかりを確保する](https://waic.jp/translations/WCAG21/Techniques/general/G182)
- [G183: 色が単独でリンク又はコントロールを特定する場所で、周囲のテキストと一緒に 3:1 のコントラスト比を使用し、そのリンク又はコントロールのフォーカスに追加の視覚的な手がかりを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G183)

###### 状況 B: 情報を伝える画像の中で色を用いている場合

- [G111: 色とパターンを併用する](https://waic.jp/translations/WCAG21/Techniques/general/G111)
- [G14: 色の違いで伝えている情報をテキストでも入手可能にする](https://waic.jp/translations/WCAG21/Techniques/general/G14)

##### 失敗例

- [F13: 達成基準 1.1.1 及び達成基準 1.4.1 の失敗例 － 画像の色の違いで伝られる情報が含まれないテキストによる代替を持っている](https://waic.jp/translations/WCAG21/Techniques/failures/F13)
- [F73: 達成基準 1.4.1 の失敗例 － 色覚なしで視覚的にはっきりと分からないリンクを作成する](https://waic.jp/translations/WCAG21/Techniques/failures/F73)
- [F81: 達成基準 1.4.1 の失敗例 － 色の違いだけで、必須又はエラーフィールドを特定している](https://waic.jp/translations/WCAG21/Techniques/failures/F81)

#### [1.4.2 音声の制御](https://waic.jp/translations/WCAG21/Understanding/audio-control.html)

適合レベル A

##### 十分な達成方法

1. [G60: 音声の再生を 3 秒以内に自動的に停止する](https://waic.jp/translations/WCAG21/Techniques/general/G60)
2. [G170: 自動的に再生される音声を停止するコントロールを、ウェブページの先頭付近で提供する](https://waic.jp/translations/WCAG21/Techniques/general/G170)
3. [G171: 利用者の要求に応じてのみ、音声を再生する](https://waic.jp/translations/WCAG21/Techniques/general/G171)

##### 失敗例

- [F23: 達成基準 1.4.2 の失敗例 － 3 秒よりも長く音声を再生していて、音声を止めるメカニズムがない](https://waic.jp/translations/WCAG21/Techniques/failures/F23)
- [F93: 達成基準 1.4.2 の失敗例 － 自動再生する HTML5 のメディア要素を一時停止又は停止する方法がない](https://waic.jp/translations/WCAG21/Techniques/failures/F93)

#### [1.4.3 コントラスト (最低限)](https://waic.jp/translations/WCAG21/Understanding/contrast-minimum.html)

適合レベル AA

##### 十分な達成方法

###### 状況 A: 太字でないテキストが 18 ポイント未満、太字のテキストが 14 ポイント未満の場合

1. [G18: テキスト (及び文字画像) とその背景の間に、少なくとも 4.5:1 のコントラスト比を確保する](https://waic.jp/translations/WCAG21/Techniques/general/G18)
2. [G148: 背景色及び文字色を指定せず、その初期設定を変更するウェブコンテンツ技術の機能を使用しない](https://waic.jp/translations/WCAG21/Techniques/general/G148)
3. [G174: 利用者が十分なコントラストのある提示に切り替えられるように、十分なコントラスト比のあるコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G174)

###### 状況 B: 太字でないテキストが少なくとも 18 ポイント以上、太字のテキストが少なくとも 14 ポイント以上の場合

1. [G145: テキスト (及び文字画像) とその背景の間に、少なくとも 3:1 のコントラスト比を確保する](https://waic.jp/translations/WCAG21/Techniques/general/G145)
2. [G148: 背景色及び文字色を指定せず、その初期設定を変更するウェブコンテンツ技術の機能を使用しない](https://waic.jp/translations/WCAG21/Techniques/general/G148)
3. [G174: 利用者が十分なコントラストのある提示に切り替えられるように、十分なコントラスト比のあるコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G174)

##### 失敗例

- [F24: 達成基準 1.4.3、1.4.6 及び 1.4.8 の失敗例 － 背景色を指定せずに前景色を指定する (又は、前景色を指定せずに背景色を指定する)](https://waic.jp/translations/WCAG21/Techniques/failures/F24)
- [F83: 達成基準 1.4.3 及び 1.4.6 の失敗例 － 前景のテキスト (又は文字画像) との十分なコントラストを提供しない背景画像を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F83)

#### [1.4.4 テキストのサイズ変更](https://waic.jp/translations/WCAG21/Understanding/resize-text.html)

適合レベル AA

##### 十分な達成方法

- [G142: ズーム機能をサポートする一般に入手可能なユーザエージェントのあるウェブコンテンツ技術を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G142)
- テキストのサイズを変更した際に、テキストコンテナもサイズ変更するようにする、かつ次の達成方法の一つ以上を用いて、コンテンツにあるその他の大きさと相対的な大きさにする
   - [C28: em 単位を用いて、テキストコンテナのサイズを指定する](https://waic.jp/translations/WCAG21/Techniques/css/C28)
   - 相対的な大きさの達成方法
     - [C12: フォントサイズにパーセントを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C12)
     - [C13: 名前付きフォントサイズを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C13)
     - [C14: フォントサイズに em 単位を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C14)
   - テキストコンテナのサイズを可変にする達成方法
     - [SCR34: テキストサイズに応じて拡大縮小するように、サイズ及びポジションを定める](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR34)
     - [G146: リキッドレイアウトを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G146)
- [G178: 利用者がウェブページ上のすべてのテキストを 200％まで徐々に変更できるコントロールをウェブページ上で提供する](https://waic.jp/translations/WCAG21/Techniques/general/G178)
- [G179: 文字サイズを変更し、かつテキストコンテナの幅を変更しないときに、コンテンツ又は機能が損なわれないようにする](https://waic.jp/translations/WCAG21/Techniques/general/G179)

##### 失敗例

- [F69: 達成基準 1.4.4 の失敗例 － 視覚的にレンダリングされたテキストを 200% まで拡大するときに、テキスト、画像又はコントロールが、切り取られたり、端が欠けたり、又は覆い隠されたりする](https://waic.jp/translations/WCAG21/Techniques/failures/F69)
- [F80: 達成基準 1.4.4 の失敗例 － 視覚的にレンダリングされたテキストを 200% まで拡大するときに、テキストベースのフォームコントロールのサイズが変更されない](https://waic.jp/translations/WCAG21/Techniques/failures/F80)
- [F94: 達成基準 1.4.4 の失敗例 － テキストのサイズ変更のためのビューポート単位を誤って使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F94)

#### [1.4.5 文字画像](https://waic.jp/translations/WCAG21/Understanding/images-of-text.html)

適合レベル AA

##### 十分な達成方法

- [C22: テキストの視覚的提示を制御するために、CSS を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C22)
- [C30: テキストを文字画像に置き換えるために CSS を利用し、切り替えのためのユーザインタフェースコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/css/C30)
- [G140: 異なる提示を可能にするために、情報と構造を表現から分離する](https://waic.jp/translations/WCAG21/Techniques/general/G140)
- [PDF7: スキャンされた PDF 文書で OCR を実行し、実際のテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF7)

##### 参考： CSS の達成方法

- [C12: フォントサイズにパーセントを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C12)
- [C13: 名前付きフォントサイズを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C13)
- [C14: フォントサイズに em 単位を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C14)
- [C8: 単語内の文字間隔を制御するために、CSS の letter-spacing を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C8)
- [C6: 構造を示すマークアップに基づいてコンテンツを配置する](https://waic.jp/translations/WCAG21/Techniques/css/C6)

#### [1.4.6 コントラスト (高度)](https://waic.jp/translations/WCAG21/Understanding/contrast-enhanced.html)

適合レベル AAA

##### 十分な達成方法

###### 状況 A: 太字でないテキストが 18 ポイント未満、太字のテキストが 14 ポイント未満の場合

- [G17: テキスト (及び文字画像) とその背景の間に、少なくとも 7:1 のコントラスト比を確保する](https://waic.jp/translations/WCAG21/Techniques/general/G17)
- [G148: 背景色及び文字色を指定せず、その初期設定を変更するウェブコンテンツ技術の機能を使用しない](https://waic.jp/translations/WCAG21/Techniques/general/G148)
- [G174: 利用者が十分なコントラストのある提示に切り替えられるように、十分なコントラスト比のあるコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G174)

###### 状況 B: 太字でないテキストが少なくとも 18 ポイント以上、太字のテキストが少なくとも 14 ポイント以上の場合

- [G18: テキスト (及び文字画像) とその背景の間に、少なくとも 4.5:1 のコントラスト比を確保する](https://waic.jp/translations/WCAG21/Techniques/general/G18)
- [G148: 背景色及び文字色を指定せず、その初期設定を変更するウェブコンテンツ技術の機能を使用しない](https://waic.jp/translations/WCAG21/Techniques/general/G148)
- [G174: 利用者が十分なコントラストのある提示に切り替えられるように、十分なコントラスト比のあるコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G174)

##### 失敗例

- [F24: 達成基準 1.4.3、1.4.6 及び 1.4.8 の失敗例 － 背景色を指定せずに前景色を指定する (又は、前景色を指定せずに背景色を指定する)](https://waic.jp/translations/WCAG21/Techniques/failures/F24)
- [F83: 達成基準 1.4.3 及び 1.4.6 の失敗例 － 前景のテキスト (又は文字画像) との十分なコントラストを提供しない背景画像を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F83)

#### [1.4.7 小さな背景音、又は背景音なし](https://waic.jp/translations/WCAG21/Understanding/low-or-no-background-audio.html)

適合レベル AAA

##### 十分な達成方法

- [G56: 非発話音が発話音声コンテンツより少なくとも 20 デシベル低くなるように、音声ファイルを編集する](https://waic.jp/translations/WCAG21/Techniques/general/G56)

#### [1.4.8 視覚的提示](https://waic.jp/translations/WCAG21/Understanding/visual-presentation.html)

適合レベル AAA

##### 十分な達成方法

- 次のいずれか
    - [C23: メインコンテンツのテキスト及び背景の色を指定せず、バナー、機能及びナビゲーションなどのような補助的なコンテンツのテキスト及び背景の色を CSS で指定する](https://waic.jp/translations/WCAG21/Techniques/css/C23)
    - [C25: テキスト及び背景の色は指定せずに、ウェブページの各領域の範囲を明確にするためのボーダーやレイアウトを CSS で指定する](https://waic.jp/translations/WCAG21/Techniques/css/C25)
    - [G156: テキストのブロックの前景及び背景を変更できる、一般に入手可能なユーザエージェントが備えるウェブコンテンツ技術を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G156)
    - [G148: 背景色及び文字色を指定せず、その初期設定を変更するウェブコンテンツ技術の機能を使用しない](https://waic.jp/translations/WCAG21/Techniques/general/G148)
    - [G175: 背景色及び前景色のための複数色選択ツールをページ上で提供する](https://waic.jp/translations/WCAG21/Techniques/general/G175)
- 次のいずれか
    - [G204: 閲覧画面の幅を狭めたときに、ユーザエージェントによるテキストのリフローを妨げない](https://waic.jp/translations/WCAG21/Techniques/general/G204)
    - [C20: ブラウザがサイズ変更されるときに、行が平均で 80 字以下になるようなカラムの幅を設定するために、相対長さを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C20)
- 次のいずれか
    - [C19: CSS でテキストの配置を左寄せ又は右寄せに指定する](https://waic.jp/translations/WCAG21/Techniques/css/C19)
    - [G172: テキストの両端揃えを解除するためのメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G172)
    - [G169: テキストを左寄せ又は右寄せにする](https://waic.jp/translations/WCAG21/Techniques/general/G169)
- 次のいずれか
    - [G188: 行間及び段落の間隔を広げるボタンをウェブページ上に提供する](https://waic.jp/translations/WCAG21/Techniques/general/G188)
    - [C21: 行送り幅を CSS で指定する](https://waic.jp/translations/WCAG21/Techniques/css/C21)
- 次のいずれか
    - [G204: 閲覧画面の幅を狭めたときに、ユーザエージェントによるテキストのリフローを妨げない](https://waic.jp/translations/WCAG21/Techniques/general/G204)
    - [G146: リキッドレイアウトを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G146)、かつ、次の達成方法の一つ以上を用いて、コンテンツにあるその他の大きさと相対的な大きさにする
        - [C12: フォントサイズにパーセントを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C12)
        - [C13: 名前付きフォントサイズを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C13)
        - [C14: フォントサイズに em 単位を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C14)
        - [C24: コンテナのサイズに CSS のパーセント値を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C24)
        - [SCR34: テキストサイズに応じて拡大縮小するように、サイズ及びポジションを定める](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR34)
    - [G206: 利用者が横スクロールをしなくてもテキストの行を読めるようにするような、レイアウトを切り替えるオプションをコンテンツの中で提供する](https://waic.jp/translations/WCAG21/Techniques/general/G206)

##### 失敗例

- [F24: 達成基準 1.4.3、1.4.6 及び 1.4.8 の失敗例 － 背景色を指定せずに前景色を指定する (又は、前景色を指定せずに背景色を指定する)](https://waic.jp/translations/WCAG21/Techniques/failures/F24)
- [F88: 達成基準 1.4.8 の失敗例 － 両端揃え (左右両方のマージンを揃える) のテキストを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F88)

#### [1.4.9 文字画像 (例外なし)](https://waic.jp/translations/WCAG21/Understanding/images-of-text-no-exception.html)

適合レベル AAA

##### 十分な達成方法

- [C22: テキストの視覚的提示を制御するために、CSS を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C22)
- [C30: テキストを文字画像に置き換えるために CSS を利用し、切り替えのためのユーザインタフェースコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/css/C30)
- [G140: 異なる提示を可能にするために、情報と構造を表現から分離する](https://waic.jp/translations/WCAG21/Techniques/general/G140)
- [PDF7: スキャンされた PDF 文書で OCR を実行し、実際のテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF7)

#### [1.4.10 リフロー](https://waic.jp/translations/WCAG21/Understanding/reflow.html)

適合レベル AA

##### 十分な達成方法

- [C32: メディアクエリとグリッド CSS を使用して列をリフローする](https://waic.jp/translations/WCAG21/Techniques/css/C32)
- [C31: コンテンツをリフローするために CSS Flexbox を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C31)
- [C33: 長い URL 及びテキスト文字列をリフローできるようにする](https://waic.jp/translations/WCAG21/Techniques/css/C33)
- [C38: CSS width、max-width、及び flexbox を用いたラベルと入力欄の配置](https://waic.jp/translations/WCAG21/Techniques/css/C38)
- [SCR34: テキストサイズに応じて拡大縮小するように、サイズ及びポジションを定める](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR34)
- [G206: 利用者が横スクロールをしなくてもテキストの行を読めるようにするような、レイアウトを切り替えるオプションをコンテンツの中で提供する](https://waic.jp/translations/WCAG21/Techniques/general/G206)

##### 失敗例

- [F102: 達成基準 1.4.10 の失敗例 － コンテンツがリフローしたとき、コンテンツが消えて利用できなくなる](https://waic.jp/translations/WCAG21/Techniques/failures/F102)

#### [1.4.11 非テキストのコントラスト](https://waic.jp/translations/WCAG21/Understanding/non-text-contrast.html)

適合レベル AA

##### 十分な達成方法

###### 状況 A: 色は、ユーザインタフェース コンポーネントを識別するために使用される、又はユーザインタフェース コンポーネントの状態を識別するために使用される

- [G195: コンテンツ制作者が提供する視認性に優れたフォーカスインジケータを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G195)
- [G174: 利用者が十分なコントラストのある提示に切り替えられるように、十分なコントラスト比のあるコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G174)

###### 状況 B: 色はグラフィカルコンテンツを理解するために必須である

- [G207: アイコンに対して 3:1 のコントラスト比を確保する](https://waic.jp/translations/WCAG21/Techniques/general/G207)
- [G209: 隣り合う色の境界に十分なコントラストを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G209)

##### 失敗例

- [F78: 達成基準 2.4.7 の失敗例 － 視覚的なフォーカスインジケータを除去する又は不可視にするような方法で、要素のアウトライン及びボーダーをスタイル指定する](https://waic.jp/translations/WCAG21/Techniques/failures/F78)

#### [1.4.12 テキストの間隔](https://waic.jp/translations/WCAG21/Understanding/text-spacing.html)

適合レベル AA

##### 十分な達成方法

- [C36: テキスト間隔を上書きできるようにする](https://waic.jp/translations/WCAG21/Techniques/css/C36)
- [C35: 折り返しのないテキストの間隔を見込む](https://waic.jp/translations/WCAG21/Techniques/css/C35)

##### 参考： CSS の達成方法

- [C8: 単語内の文字間隔を制御するために、CSS の letter-spacing を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C8)
- [C21: 行送り幅を CSS で指定する](https://waic.jp/translations/WCAG21/Techniques/css/C21)
- [C28: em 単位を用いて、テキストコンテナのサイズを指定する](https://waic.jp/translations/WCAG21/Techniques/css/C28)

##### 失敗例

- [F104: 達成基準 1.4.12 の失敗例 － テキストの間隔を調整したときにコンテンツが切り取られる又は重なる](https://waic.jp/translations/WCAG21/Techniques/failures/F104)

#### [1.4.13 ホバー又はフォーカスで表示されるコンテンツ](https://waic.jp/translations/WCAG21/Understanding/content-on-hover-or-focus.html)

適合レベル AA

##### 十分な達成方法

- [SCR39: フォーカス又はホバー時のコンテンツをホバー可能、非表示可能及び表示が継続されるようにする](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR39)
- ARIA: role="tooltip" を使用する
- CSS: hover 及び focus 疑似クラスを使用する

##### 失敗例

以下に挙げるものは、WCAG ワーキンググループが達成基準の失敗例とみなした、よくある間違いである。

- [F95: 達成基準 1.4.13 の失敗例 － ホバーによって表示されるコンテンツがホバーできない](https://waic.jp/translations/WCAG21/Techniques/failures/F95)
- 失敗例 － ポインタホバー又はキーボードフォーカスを動かさずにコンテンツを非表示にすることができない
- 失敗例 － ホバー又はフォーカス時で表示されるコンテンツが、非表示又は無効になるまで表示され続けることができない

## 操作可能

### [2.1 キーボード操作可能](https://waic.jp/translations/WCAG21/Understanding/keyboard-accessible.html)

#### [2.1.1 キーボード](https://waic.jp/translations/WCAG21/Understanding/keyboard.html)

適合レベル A

##### 十分な達成方法

- [G202: 全ての機能に対してキーボード制御を確保する](https://waic.jp/translations/WCAG21/Techniques/general/G202)
- 次の達成方法の一つを用いて、キーボードで操作できることを保証する。
  - [H91: HTML のフォームコントロール及びリンクを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H91)
  - [PDF3: PDF 文書で正しいタブ順序と読み上げ順序を確保する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF3)
  - [PDF11: PDF 文書内で Link アノテーションと /Link 構造要素を使用してリンクとリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF11)
  - [PDF23: PDF 文書内でインタラクティブなフォームコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF23)
- 次の達成方法の一つを用いて、[G90: キーボードがトリガーとなるイベントハンドラを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G90):
  - [SCR20: キーボードとその他のデバイス固有の機能を両方とも使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR20)
  - [SCR35: アンカー及びボタンの onclick イベントを用いて、アクションをキーボード操作可能にする](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR35)
  - [SCR2: キーボード及びマウスのイベントハンドラを両方とも使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR2)

##### 失敗例

- [F54: 達成基準 2.1.1 の失敗例 － ある機能に (ジェスチャを含む) ポインティングデバイス特有のイベントハンドラのみを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F54)
- [F55: 達成基準 2.1.1、達成基準 2.4.7、及び達成基準 3.2.1 の失敗例 － フォーカスを受け取ったときに、フォーカスを取り除くために、スクリプトを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F55)
- [F42: 達成基準 1.3.1、達成基準 2.1.1、達成基準 2.1.3、又は達成基準 4.1.2 の失敗例 － リンクをエミュレートしている](https://waic.jp/translations/WCAG21/Techniques/failures/F42)

#### [2.1.2 キーボードトラップなし](https://waic.jp/translations/WCAG21/Understanding/no-keyboard-trap.html)

適合レベル A

##### 十分な達成方法

- [G21: 利用者がコンテンツ内に閉じ込められないことを確認する](https://waic.jp/translations/WCAG21/Techniques/general/G21)
- [FLASH17: Flash オブジェクトにキーボードアクセスを提供して、キーボードトラップを回避する](https://waic.jp/translations/WCAG21/Techniques/flash/FLASH17)

##### 失敗例

- [F10: 達成基準 2.1.2 及び 適合要件 5 の失敗例 － 利用者を一つのフォーマット型の中に閉じ込める方法で、複数のコンテンツフォーマットを組み合わせている](https://waic.jp/translations/WCAG21/Techniques/failures/F10)

#### [2.1.3 キーボード (例外なし)](https://waic.jp/translations/WCAG21/Understanding/keyboard-no-exception.html)

適合レベル AAA

#### [2.1.4 文字キーのショートカット](https://waic.jp/translations/WCAG21/Understanding/character-key-shortcuts.html)

適合レベル A

##### 十分な達成方法

- [G217: 利用者が文字キーのショートカットを再割り当て又は無効にできるメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G217)

##### 失敗例

- [F99: 達成基準 2.1.4 の失敗例－停止又は再割り当て不可能な文字キーショートカットが実装されている](https://waic.jp/translations/WCAG21/Techniques/failures/F99)

### [2.2 十分な時間](https://waic.jp/translations/WCAG21/Understanding/enough-time.html)

#### [2.2.1 タイミング調整可能](https://waic.jp/translations/WCAG21/Understanding/timing-adjustable.html)

適合レベル A

##### 十分な達成方法

###### 状況 A: セッションの制限時間がある場合

- [G133: 複数部分で構成されるフォームの最初のページに、利用者がセッションの制限時間を延長又は解除を要求できるチェックボックスを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G133)
- [G198: 利用者が制限時間を解除するための手段を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G198)

###### 状況 B: 制限時間がページ上のスクリプトで制御されている場合

- [G198: 利用者が制限時間を解除するための手段を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G198)
- [G180: 利用者がデフォルトの制限時間を 10 倍に設定できる手段を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G180)
- [SCR16: 制限時間が切れようとしていることを利用者に警告するスクリプトを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR16) かつ [SCR1: 利用者が初期設定の制限時間を延長できるようにする](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR1)

###### 状況 C: コンテンツを読むのに制限時間がある場合

- [G4: コンテンツを一時停止させて、一時停止させたところから再開できるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G4)
- [G198: 利用者が制限時間を解除するための手段を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G198)
- [SCR33: コンテンツをスクロールし、かつそれを一時停止するメカニズムを提供するためにスクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR33)
- [SCR36: 静的なウィンドウ又は領域にある、動きのあるテキスト、スクロールするテキスト、又は自動更新されるテキストを利用者が表示できるメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR36)

##### 失敗例

- [F40: 達成基準 2.2.1、達成基準 2.2.4、及び達成基準 3.2.5 の失敗例 － 制限時間付きの meta 要素リダイレクトを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F40)
- [F41: 達成基準 2.2.1、達成基準 2.2.4、及び達成基準 3.2.5 の失敗例 － ページを再読み込みするために、meta 要素リフレッシュを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F41)
- [F58: 達成基準 2.2.1 の失敗例 － タイムアウト後にページを自動的にリダイレクトするために、サーバーサイドの手法を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F58)

#### [2.2.2 一時停止、停止、非表示](https://waic.jp/translations/WCAG21/Understanding/pause-stop-hide.html)

適合レベル A

##### 十分な達成方法

- [G4: コンテンツを一時停止させて、一時停止させたところから再開できるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G4)
- [SCR33: コンテンツをスクロールし、かつそれを一時停止するメカニズムを提供するためにスクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR33)
- [G11: 5 秒未満で点滅するコンテンツを制作する](https://waic.jp/translations/WCAG21/Techniques/general/G11)
- [G187: ユーザエージェントによって点滅するコンテンツを停止できるウェブコンテンツ技術を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G187)
- [G152: (5 秒以内の) 数回のループ後に点滅を停止するように、アニメーション GIF を設定する](https://waic.jp/translations/WCAG21/Techniques/general/G152)
- [SCR22: 点滅を制御し、5 秒以内に停止させるために、スクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR22)
- [G186: 動きのあるコンテンツ、点滅するコンテンツ、又は自動更新するコンテンツを停止させるコントロールを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G186)
- [G191: 点滅するコンテンツのないページを再読み込みするリンク、ボタン、又はその他のメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G191)

##### 失敗例

- [F16: 達成基準 2.2.2 の失敗例 － コンテンツを一時停止及び再開するメカニズムなしで、動きが操作に不可欠ではないところにスクロールするコンテンツを含んでいる](https://waic.jp/translations/WCAG21/Techniques/failures/F16)
- [F47: 達成基準 2.2.2 の失敗例 － blink 要素を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F47)
- [F4: 達成基準 2.2.2 の失敗例 － 5 秒未満で停止させるメカニズムを提供せずに、text-decoration:blink を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F4)
- [F50: 達成基準 2.2.2 の失敗例 － 5 秒以内に点滅を停止するメカニズムなしに、点滅効果を引き起こすスクリプト](https://waic.jp/translations/WCAG21/Techniques/failures/F50)
- [F7: 達成基準 2.2.2 の失敗例 － 5 秒よりも長く点滅するコンテンツを一時停止するメカニズムなしでコンテンツを点滅している、Java 又は Flash などのオブジェクト又はアプレット](https://waic.jp/translations/WCAG21/Techniques/failures/F7)

#### [2.2.3 タイミング非依存](https://waic.jp/translations/WCAG21/Understanding/no-timing.html)

適合レベル AAA

##### 十分な達成方法

- [G5: 利用者が制限時間なしで操作を完了できるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G5)

#### [2.2.4 割り込み](https://waic.jp/translations/WCAG21/Understanding/interruptions.html)

適合レベル AAA

##### 十分な達成方法

- [G75: コンテンツの更新を延期するメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G75)
- [G76: 自動的に更新する代わりに、利用者がコンテンツの更新を要求するメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G76)
- [SCR14: 不可欠ではないアラートの表示を任意にするために、スクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR14)

##### 失敗例

- [F40: 達成基準 2.2.1、達成基準 2.2.4、及び達成基準 3.2.5 の失敗例 － 制限時間付きの meta 要素リダイレクトを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F40)
- [F41: 達成基準 2.2.1、達成基準 2.2.4、及び達成基準 3.2.5 の失敗例 － ページを再読み込みするために、meta 要素リフレッシュを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F41)

#### [2.2.5 再認証](https://waic.jp/translations/WCAG21/Understanding/re-authenticating.html)

適合レベル AAA

##### 十分な達成方法

- 次の実装技術の一つを使用することでデータを損うことなく継続することができる選択肢を提供する
  - [G105: 利用者が再認証した後に利用できるようにデータを保存する](https://waic.jp/translations/WCAG21/Techniques/general/G105)
  - [G181: 利用者のデータを、再認証したページで非表示データ又は暗号化されたデータとしてエンコーディングする](https://waic.jp/translations/WCAG21/Techniques/general/G181)

##### 失敗例

- [F12: 達成基準 2.2.5 の失敗例 － 利用者の入力を保存し、再認証時にその情報を再確立するためのメカニズムなしに、セッションの制限時間がある](https://waic.jp/translations/WCAG21/Techniques/failures/F12)

#### [2.2.6 タイムアウト](https://waic.jp/translations/WCAG21/Understanding/timeouts.html)

適合レベル AAA

##### 十分な達成方法

- セッションタイムアウトは、無操作状態が少なくとも 20 時間続く場合に発生するように設定する。
- 利用者が入力したデータを 20 時間以上保持する。
- プロセスの開始時に、利用者の無操作時間についての警告を提示する。

### [2.3 発作と身体的反応](https://waic.jp/translations/WCAG21/Understanding/seizures-and-physical-reactions.html)

#### [2.3.1 3回の閃光、又は閾値以下](https://waic.jp/translations/WCAG21/Understanding/three-flashes-or-below-threshold.html)

適合レベル A

##### 十分な達成方法

- [G19: どの 1 秒間においても、コンテンツに 3 回よりも多く閃光を放つコンポーネントがないことを確認する](https://waic.jp/translations/WCAG21/Techniques/general/G19)
- [G176: 閃光を放つ領域を十分に小さくする](https://waic.jp/translations/WCAG21/Techniques/general/G176)
- [G15: コンテンツが一般閃光閾値及び赤色閃光閾値を越えていないことを確認するためにツールを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G15)

#### [2.3.2 3回の閃光](https://waic.jp/translations/WCAG21/Understanding/three-flashes.html)

適合レベル AAA

##### 十分な達成方法

- [G19: どの 1 秒間においても、コンテンツに 3 回よりも多く閃光を放つコンポーネントがないことを確認する](https://waic.jp/translations/WCAG21/Techniques/general/G19)

#### [2.3.3 インタラクションによるアニメーション](https://waic.jp/translations/WCAG21/Understanding/animation-from-interactions.html)

適合レベル AAA

##### 十分な達成方法

- [C39: モーションの防止に CSS reduce-motion クエリを使用する](https://waic.jp/translations/WCAG21/Techniques/css/C39)

### [2.4 ナビゲーション可能](https://waic.jp/translations/WCAG21/Understanding/navigable.html)

#### [2.4.1 ブロックスキップ](https://waic.jp/translations/WCAG21/Understanding/bypass-blocks.html)

適合レベル A

##### 十分な達成方法

- 次の達成方法の中から一つを用いて、繰り返されるブロックをスキップするリンクを作成する
  - [G1: メインコンテンツエリアへ直接移動するリンクを各ページの先頭に追加する](https://waic.jp/translations/WCAG21/Techniques/general/G1)
  - [G123: 繰り返しているコンテンツのブロックの先頭に、そのブロックの末尾へのリンクを追加する](https://waic.jp/translations/WCAG21/Techniques/general/G123)
  - [G124: ページの先頭に、コンテンツの各エリアへのリンクを追加する](https://waic.jp/translations/WCAG21/Techniques/general/G124)
- 次の達成方法の中から一つを用いて、スキップ可能な方法で繰り返されるブロックをグループ化する
  - [ARIA11: ページのリージョンを特定するために ARIA ランドマークを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA11)
  - [H69: コンテンツの各セクションの開始位置に見出し要素を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H69)
  - [PDF9: PDF 文書内のコンテンツを見出しタグでマークアップすることによって見出しを作成する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF9)
  - [H70: 繰り返されているコンテンツのブロックをグループ化するために、frame 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H70) かつ [H64: frame 要素及び iframe 要素の title 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H64)
  - [SCR28: コンテンツのブロックをバイパスするために、展開可能及び折り畳み可能なメニューを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR28)

#### [2.4.2 ページタイトル](https://waic.jp/translations/WCAG21/Understanding/page-titled.html)

適合レベル A

##### 十分な達成方法

- [G88: ウェブページに説明的なタイトルを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G88)、**かつ** 下記の達成方法の一つを使ってウェブページにタイトルを結びつける:
  - [H25: title 要素を用いて、ページタイトルを提供する](https://waic.jp/translations/WCAG21/Techniques/html/H25)
  - [PDF18: PDF 文書の文書情報辞書内の Title エントリを使用して文書のタイトルを指定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF18)

##### 参考達成方法

- [G127: あるウェブページと、より大きな一連のウェブページとの関係性を特定する](https://waic.jp/translations/WCAG21/Techniques/general/G127)

##### 失敗例

- [F25: 達成基準 2.4.2 の失敗例 － コンテンツを特定しないウェブページのタイトル](https://waic.jp/translations/WCAG21/Techniques/failures/F25)

#### [2.4.3 フォーカス順序](https://waic.jp/translations/WCAG21/Understanding/focus-order.html)

適合レベル A

##### 十分な達成方法

- [G59: コンテンツ内のシーケンスと関連性に応じた順序でインタラクティブ要素を配置する](https://waic.jp/translations/WCAG21/Techniques/general/G59)
- 次の達成方法の一つを用いて、コンテンツ内の順序及び関係性に従った順序でフォーカスを要素に与える
  - [C27: DOM の順序を視覚的順序と一致させる](https://waic.jp/translations/WCAG21/Techniques/css/C27)
  - [PDF3: PDF 文書で正しいタブ順序と読み上げ順序を確保する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF3)
- 次の達成方法の一つを用いて、ウェブページを動的に変化させる
  - [SCR26: 動的なコンテンツを、Document Object Model の、そのトリガーとなる要素の直後に挿入する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR26)
  - [SCR37: デバイス非依存な方法でカスタムダイアログを作成する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR37)
  - [SCR27: Document Object Model を用いて、ページ上にある複数のセクションを並び替える](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR27)

##### 失敗例

- [F44: 達成基準 2.4.3 の失敗例 － 意味及び操作性を保持しないタブ順序を作成するために、tabindex 属性を使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F44)
- [F85: 達成基準 2.4.3 の失敗例 － 連続するナビゲーション順序において、トリガーとなるコントロールに隣接していないダイアログ又はメニューを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F85)

#### [2.4.4 リンクの目的 (コンテキスト内)](https://waic.jp/translations/WCAG21/Understanding/link-purpose-in-context.html)

適合レベル A

##### 十分な達成方法

- [G91: リンクの目的を説明したリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G91)
- [H30: a 要素のリンクの目的を説明するリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/html/H30)
- [H24: イメージマップの area 要素にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H24)
- 次の達成方法の一つを用いて、利用者が短めのリンクテキスト又は長めのリンクテキストを選べるようにする
  - [G189: ウェブページの先頭近くに、リンクテキストを変更するコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G189)
  - [SCR30: リンクテキストを変更するために、スクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR30)
- [G53: リンクテキストとそれが含まれている文中のテキストとを組み合わせて、リンクの目的を特定する](https://waic.jp/translations/WCAG21/Techniques/general/G53)
- 次の達成方法の一つを用いて、リンクの目的を補足説明する
  - [H33: title 属性を用いて、リンクテキストを補足する](https://waic.jp/translations/WCAG21/Techniques/html/H33)
  - [C7: リンクテキストの一部を非表示にするために、CSS を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C7)
- 次に挙げる達成方法の一つを用いて、プログラムによる解釈されるリンクのコンテキストと一緒にリンクの目的を特定する
  - [ARIA7: リンクの目的を示すために aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA7)
  - [ARIA8: リンクの目的を示すために aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA8)
  - [H77: リンクテキストとそれが含まれているリスト項目とを組み合わせて、リンクの目的を特定する](https://waic.jp/translations/WCAG21/Techniques/html/H77)
  - [H78: リンクテキストとそれが含まれている段落とを組み合わせて、リンクの目的を特定する](https://waic.jp/translations/WCAG21/Techniques/html/H78)
  - [H79: リンクテキストとそれが含まれているデータセル及び関連づけられた見出しセルとを組み合わせて、リンクの目的を特定する](https://waic.jp/translations/WCAG21/Techniques/html/H79)
  - [H81: リストが入れ子になっている状況で、親のリスト項目と結合したリンクテキストを用いて、入れ子になったリストの中でリンクの目的を特定する](https://waic.jp/translations/WCAG21/Techniques/html/H81)
- [G91: リンクの目的を説明したリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G91)、かつ、次の達成方法の一つを用いて、セマンティックにリンクを示す:
  - [PDF11: PDF 文書内で Link アノテーションと /Link 構造要素を使用してリンクとリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF11)
  - [PDF13: PDF 文書内のリンクに対して /Alt エントリを使用して置換テキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF13)

##### 参考達成方法

- [H2: 同じリソースに対して隣接する画像とテキストリンクを結合する](https://waic.jp/translations/WCAG21/Techniques/html/H2)
- [H80: リンクテキストと先行する見出し要素とを組み合わせて、リンクの目的を特定する](https://waic.jp/translations/WCAG21/Techniques/html/H80)

##### 失敗例

- [F63: 達成基準 2.4.4 の失敗例 － リンクと関係のないコンテンツにのみ、リンクのコンテキストを提供している](https://waic.jp/translations/WCAG21/Techniques/failures/F63)
- [F89: 達成基準 2.4.4、達成基準 2.4.9、及び達成基準 4.1.2 の失敗例 － リンクで唯一のコンテンツである画像にアクセシブルな名前 (accessible name) が提供されていない](https://waic.jp/translations/WCAG21/Techniques/failures/F89)

#### [2.4.5 複数の手段](https://waic.jp/translations/WCAG21/Understanding/multiple-ways.html)

適合レベル AA

##### 十分な達成方法

- 次の達成方法のうち二つ以上を用いる
  - [G125: 関連するウェブページへナビゲートするリンクを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G125)
  - [G64: 目次を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G64)
  - [G63: サイトマップを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G63)
  - [G161: 利用者がコンテンツを見つけるのを手助けするために検索機能を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G161)
  - [G126: 他の全てのウェブページへのリンク一覧を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G126)
  - [G185: ホームページからサイト上の全てのウェブページにリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G185)

#### [2.4.6 見出し及びラベル](https://waic.jp/translations/WCAG21/Understanding/headings-and-labels.html)

適合レベル AA

##### 十分な達成方法

- [G130: 説明的な見出しをつける](https://waic.jp/translations/WCAG21/Techniques/general/G130)
- [G131: 説明的なラベルを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G131)

#### [2.4.7 フォーカスの可視化](https://waic.jp/translations/WCAG21/Understanding/focus-visible.html)

適合レベル AA

##### 十分な達成方法

- [G149: フォーカスを受け取るときに、ユーザエージェントによって強調されるユーザインタフェース コンポーネントを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G149)
- [C15: ユーザインタフェースコンポーネントがフォーカスを受けとったときの提示を変更するために、CSS を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C15)
- [G165: プラットフォームのデフォルトフォーカスインジケータを使用することによって、視認性の高いデフォルトフォーカスインジケータを引き継げるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G165)
- [G195: コンテンツ制作者が提供する視認性に優れたフォーカスインジケータを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G195)
- [C40: すべてのコンポーネントで十分なコントラスト比を確保するために 2 色のフォーカスインジケータを作成する](https://waic.jp/translations/WCAG21/Techniques/css/C40)
- [SCR31: フォーカスのある要素の背景色又はボーダーを変更するために、スクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR31)

##### 失敗例

- [F55: 達成基準 2.1.1、達成基準 2.4.7、及び達成基準 3.2.1 の失敗例 － フォーカスを受け取ったときに、フォーカスを取り除くために、スクリプトを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F55)
- [F78: 達成基準 2.4.7 の失敗例 － 視覚的なフォーカスインジケータを除去する又は不可視にするような方法で、要素のアウトライン及びボーダーをスタイル指定する](https://waic.jp/translations/WCAG21/Techniques/failures/F78)

#### [2.4.8 現在位置](https://waic.jp/translations/WCAG21/Understanding/location.html)

適合レベル AAA

##### 十分な達成方法

- [G65: パンくずリストを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G65)
- [G63: サイトマップを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G63)
- [G128: ナビゲーションバー内で現在位置を示す](https://waic.jp/translations/WCAG21/Techniques/general/G128)
- 次に挙げる達成方法の一つを用いて、[G127: あるウェブページと、より大きな一連のウェブページとの関係性を特定する](https://waic.jp/translations/WCAG21/Techniques/general/G127)
  - [H59: link 要素及びナビゲーションツールを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H59)

##### 参考達成方法

- [PDF14: PDF 文書内に連続するヘッダーとフッターを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF14)
- [PDF17: PDF 文書に一貫性のあるページ番号を指定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF17)

#### [2.4.9 リンクの目的 (リンクのみ)](https://waic.jp/translations/WCAG21/Understanding/link-purpose-link-only.html)

適合レベル AAA

##### 十分な達成方法

- [ARIA8: リンクの目的を示すために aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA8)
- [G91: リンクの目的を説明したリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G91)
- [H30: a 要素のリンクの目的を説明するリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/html/H30)
- [H24: イメージマップの area 要素にテキストによる代替を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H24)
- 次の達成方法の一つを用いて、利用者が短めのリンクテキスト又は長めのリンクテキストを選べるようにする
  - [G189: ウェブページの先頭近くに、リンクテキストを変更するコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G189)
  - [SCR30: リンクテキストを変更するために、スクリプトを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR30)
- 次の達成方法の一つを用いて、リンクの目的を補足説明する
  - [C7: リンクテキストの一部を非表示にするために、CSS を使用する](https://waic.jp/translations/WCAG21/Techniques/css/C7)
- 次の達成方法の一つを用いて、セマンティックにリンクを示す
  - [PDF11: PDF 文書内で Link アノテーションと /Link 構造要素を使用してリンクとリンクテキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF11)
  - [PDF13: PDF 文書内のリンクに対して /Alt エントリを使用して置換テキストを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF13)

##### 参考達成方法

- [H2: 同じリソースに対して隣接する画像とテキストリンクを結合する](https://waic.jp/translations/WCAG21/Techniques/html/H2)
- [H33: title 属性を用いて、リンクテキストを補足する](https://waic.jp/translations/WCAG21/Techniques/html/H33)

##### 失敗例

- [F84: 達成基準 2.4.9 の失敗例 － リンクテキストを具体的なテキストに変更するメカニズムなしで、「ここをクリック」又は「続きを読む」などの不明確なリンクを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F84)
- [F89: 達成基準 2.4.4、達成基準 2.4.9、及び達成基準 4.1.2 の失敗例 － リンクで唯一のコンテンツである画像にアクセシブルな名前 (accessible name) が提供されていない](https://waic.jp/translations/WCAG21/Techniques/failures/F89)

#### [2.4.10 セクション見出し](https://waic.jp/translations/WCAG21/Understanding/section-headings.html)

適合レベル AAA

##### 十分な達成方法

- [G141: 見出しを用いてウェブページを構造化する](https://waic.jp/translations/WCAG21/Techniques/general/G141)
- [H69: コンテンツの各セクションの開始位置に見出し要素を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H69)

### [2.5 入力モダリティ](https://waic.jp/translations/WCAG21/Understanding/input-modalities.html)

#### [2.5.1 ポインタのジェスチャ](https://waic.jp/translations/WCAG21/Understanding/pointer-gestures.html)

適合レベル A

##### 十分な達成方法

- [G215: 軌跡ベース又はマルチポイントのジェスチャと同等の結果を得られるコントロールを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G215)
- [G216: コントロールスライダーのためにアクティブにするシングルポイントを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G216)

##### 失敗例

- [F105: 達成基準 2.5.1 の失敗例 － 単純なポインタによる代替なしに、軌跡ベースのジェスチャによる機能を提供している](https://waic.jp/translations/WCAG21/Techniques/failures/F105)

#### [2.5.2 ポインタのキャンセル](https://waic.jp/translations/WCAG21/Understanding/pointer-cancellation.html)

適合レベル A

##### 十分な達成方法

- [G210: ドラッグ＆ドロップ操作をキャンセルできるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G210)
- [G212: ネイティブコントロールを使用して、アップイベントで機能がトリガーされるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G212)
- タッチイベントは、タッチがコントロールから外されたときにのみトリガーされる。

##### 失敗例

- [F101: 達成基準 2.5.2 の失敗例 － ダウンイベントでコントロールを動作させる](https://waic.jp/translations/WCAG21/Techniques/failures/F101)

#### [2.5.3 ラベルを含む名前 (name)](https://waic.jp/translations/WCAG21/Understanding/label-in-name.html)

適合レベル A

##### 十分な達成方法

- [G208: アクセシブルな名前 (accessible name) の一部として可視ラベルのテキストを含める](https://waic.jp/translations/WCAG21/Techniques/general/G208)
- [G211: アクセシブルな名前 (accessible name) を視覚的なラベルと一致させる](https://waic.jp/translations/WCAG21/Techniques/general/G211)

##### 参考達成方法

- [G162: 関係性を最大限に予測できるようにするためにラベルを配置する](https://waic.jp/translations/WCAG21/Techniques/general/G162)
- アイコンに付随するテキストがない場合、アクセシブルな名前 (accessible name) としてそのホバーテキストを用いることを検討する。

##### 失敗例

- [F96: 達成基準 2.5.3 の失敗例 - アクセシブルな名前 (accessible name) が可視ラベルのテキストを含んでいない。](https://waic.jp/translations/WCAG21/Techniques/failures/F96)
- アクセシブルな名前 (accessible name) が可視ラベルのテキストを含んでいるが、語順が可視ラベルのテキストと同一でない。
- アクセシブルな名前 (accessible name) が可視ラベルのテキストを含んでいるが、一つ以上の語がラベルの中に挿入されている。

#### [2.5.4 動きによる起動](https://waic.jp/translations/WCAG21/Understanding/motion-actuation.html)

適合レベル A

##### 十分な達成方法

- [G213: 動きで作動させる入力のために、従来のコントロール及びアプリケーション設定を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G213)
- 利用者がモーション作動を無効にできるようにするシステムレベルの機能をサポートする

##### 失敗例

- [F106: 達成基準 2.5.4 の失敗例 － 動きによる起動を解除することができない](https://waic.jp/translations/WCAG21/Techniques/failures/F106)
- 達成基準 2.5.4 の失敗例 － 利用者がモーション作動を無効にできるようにするシステムレベルの機能を中断、又は無効にしている

#### [2.5.5 ターゲットのサイズ](https://waic.jp/translations/WCAG21/Understanding/target-size.html)

適合レベル AAA

##### 十分な達成方法

- タッチターゲットが少なくとも 44 × 44 CSS ピクセルであることを確認する。
- 画面拡大とは別に、ターゲットのサイズを変更するメカニズムを提供する。

##### 参考達成方法

- インラインのリンクは、動作させるための十分な大きさのターゲットを提供する。

##### 失敗例

- 達成基準 2.5.5 の失敗例: ターゲットのサイズが 44 × 44 CSS ピクセル未満である。
- 達成基準 2.5.5 の失敗例: リンクでもある段落のターゲットのサイズが 44 × 44 CSS ピクセル未満である。

#### [2.5.6 入力メカニズムの共存](https://waic.jp/translations/WCAG21/Understanding/concurrent-input-mechanisms.html)

適合レベル AAA

##### 十分な達成方法

- JavaScript において、`focus`、`blur`、`click` といった高レベルの、特定の入力方法に依存しないイベントハンドラのみを使用する。
- Javascript において、キーボードもしくはキーボードのような入力、及びポインタ入力のためのイベントハンドラを、同時に登録する。

##### 失敗例

- [F98: 達成基準 2.5.6 の失敗例 － タッチスクリーンデバイスにおいてインタラクションがタッチのみに限定されている](https://waic.jp/translations/WCAG21/Techniques/failures/F98)

## 理解可能

### [3.1 読み取り可能](https://waic.jp/translations/WCAG21/Understanding/readable.html)

#### [3.1.1 ページの言語](https://waic.jp/translations/WCAG21/Understanding/language-of-page.html)

適合レベル A

##### 十分な達成方法

- [H57: HTML 要素の言語属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H57)
- [PDF16: PDF 文書の文書カタログ内の /Lang エントリを使用して主たる言語を設定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF16)
- [PDF19: PDF 文書内で Lang エントリを使用して節や句の言語を指定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF19)

#### [3.1.2 一部分の言語](https://waic.jp/translations/WCAG21/Understanding/language-of-parts.html)

適合レベル AA

##### 十分な達成方法

- [H58: 自然言語の変更を指定するために、言語属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H58)
- [PDF19: PDF 文書内で Lang エントリを使用して節や句の言語を指定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF19)

#### [3.1.3 一般的ではない用語](https://waic.jp/translations/WCAG21/Understanding/unusual-words.html)

適合レベル AAA

##### 十分な達成方法

###### 状況 A: 単語又は語句にそのウェブページ特有の意味がある場合:

- ウェブページ上で単語や語句の初出時に、以下のいずれかの方法で [G101: 一般的ではない、又は限定された用法で用いられている単語又は語句の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G101)
  - [G55: 定義にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G55)
    - [H40: 記述リストを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H40)
    - [H60: 用語集にリンクするために、link 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H60)
  - [G112: インラインの定義を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G112)
    - [H54: 単語の定義実体を特定するために、dfn 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H54)
- 以下のいずれかの方法を用いて、その単語又は語句がウェブページ上に出現する度に [G101: 一般的ではない、又は限定された用法で用いられている単語又は語句の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G101)
  - [G55: 定義にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G55)
    - [H40: 記述リストを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H40)
    - [H60: 用語集にリンクするために、link 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H60)
  - [G62: 用語集を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G62)
  - [G70: オンライン辞書を検索する機能を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G70)

###### 状況 B: 単語又は語句の意味が、同じウェブページ内で異なる場合

- 以下のいずれかの方法を用いて、その単語又は語句がウェブページ上に出現する度に [G101: 一般的ではない、又は限定された用法で用いられている単語又は語句の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G101):
  - [G55: 定義にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G55)
    - [H40: 記述リストを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H40)
    - [H60: 用語集にリンクするために、link 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H60)
  - [G112: インラインの定義を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G112)
    - [H54: 単語の定義実体を特定するために、dfn 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H54)

#### [3.1.4 略語](https://waic.jp/translations/WCAG21/Understanding/abbreviations.html)

適合レベル AAA

##### 十分な達成方法

###### 状況 A: 略語がそのウェブページ内で一つの意味しか持たない場合

- ウェブページ上で略語の初出時に、以下のいずれかの方法で [G102: 略語の元の語又は説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G102)
  - [G97: 略語の初出時、その直前又は直後に元の語を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G97)
  - [G55: 定義にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G55)
  - [H28: abbr 要素を用いて、略語の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H28)
  - [PDF8: 構造要素の E エントリによって略語の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF8)
- 以下のいずれかの方法を用いて、その略語がウェブページ上に出現する度に [G102: 略語の元の語又は説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G102)
  - [G55: 定義にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G55)
  - [G62: 用語集を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G62)
  - [H60: 用語集にリンクするために、link 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H60)
  - [G70: オンライン辞書を検索する機能を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G70)
  - [H28: abbr 要素を用いて、略語の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H28)
  - [PDF8: 構造要素の E エントリによって略語の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF8)

###### 状況 B: 略語が同じウェブページで異なるものを意味している場合

- 以下のいずれかの方法を用いて、その略語がウェブページ上に出現する度に [G102: 略語の元の語又は説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G102)
  - [G55: 定義にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G55)
  - [H28: abbr 要素を用いて、略語の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H28)
  - [PDF8: 構造要素の E エントリによって略語の定義を提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF8)

#### [3.1.5 読解レベル](https://waic.jp/translations/WCAG21/Understanding/reading-level.html)

適合レベル AAA

##### 十分な達成方法

- [G86: 前期中等教育レベルの読解力をもつ人が理解できるテキストの要約を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G86)
- [G103: アイデア、イベント及びプロセスを説明するのに役立つ、視覚的なイラスト、写真及びシンボルを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G103)
- [G79: テキストの音声バージョンを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G79)
- [G153: テキストを読みやすくする](https://waic.jp/translations/WCAG21/Techniques/general/G153)
- [G160: コンテンツを利用するために理解が不可欠な情報、アイデア及びプロセスの手話バージョンを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G160)

#### [3.1.6 発音](https://waic.jp/translations/WCAG21/Understanding/pronunciation.html)

適合レベル AAA

##### 十分な達成方法

- [G120: 単語の直後に発音 (読み) を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G120)
- [G121: 発音 (読み) にリンクする](https://waic.jp/translations/WCAG21/Techniques/general/G121)
- そのコンテンツ特有の発音があったり、発音で意味が変わるような単語の発音に関する情報を含む [G62: 用語集を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G62)
- [G163: オフにすることが可能な標準的な発音区別符号を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G163)
- [H62: ruby 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H62)

### [3.2 予測可能](https://waic.jp/translations/WCAG21/Understanding/predictable.html)

#### [3.2.1 フォーカス時](https://waic.jp/translations/WCAG21/Understanding/on-focus.html)

適合レベル A

##### 十分な達成方法

- [G107: コンテキストの変化に対するトリガーとして、"focus" ではなく、"activate" を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G107)

##### 参考達成方法

- [G200: 必要なときにのみリンク先を新しいウィンドウ及びタブで開く](https://waic.jp/translations/WCAG21/Techniques/general/G200)
- [G201: 新しいウィンドウを開くときに、利用者へ事前に知らせる](https://waic.jp/translations/WCAG21/Techniques/general/G201)

##### 失敗例

- [F55: 達成基準 2.1.1、達成基準 2.4.7、及び達成基準 3.2.1 の失敗例 － フォーカスを受け取ったときに、フォーカスを取り除くために、スクリプトを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F55)

#### [3.2.2 入力時](https://waic.jp/translations/WCAG21/Understanding/on-input.html)

適合レベル A

##### 十分な達成方法

- 以下に挙げる技術特有の手法を用いて [G80: コンテキストの変化を開始する送信ボタンを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G80)
  - [H32: 送信ボタンを提供する](https://waic.jp/translations/WCAG21/Techniques/html/H32)
  - [H84: アクションを実行するために、select 要素とともにボタンを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H84)
  - [PDF15: PDF フォームで送信フォームアクションのある送信ボタンを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF15)
- [G13: コンテキストの変化を引き起こすフォームコントロールへの変更が行われる前に、何が起こるのかを説明する](https://waic.jp/translations/WCAG21/Techniques/general/G13)
- [SCR19: select 要素の onchange イベントは、コンテキストの変化を引き起こすことのないように使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR19)

##### 参考達成方法

- [G201: 新しいウィンドウを開くときに、利用者へ事前に知らせる](https://waic.jp/translations/WCAG21/Techniques/general/G201)

##### 失敗例

- [F36: 達成基準 3.2.2 の失敗例 － フォームの最後のフィールドに値を与えたときに、自動的にフォームを送信し、事前の予告なしに新しいコンテンツを提示している](https://waic.jp/translations/WCAG21/Techniques/failures/F36)
- [F37: 達成基準 3.2.2 の失敗例 － ラジオボタン、チェックボックス、又はセレクトリストの選択を変更すると、事前の予告なしに新しいウィンドウを開いている](https://waic.jp/translations/WCAG21/Techniques/failures/F37)

#### [3.2.3 一貫したナビゲーション](https://waic.jp/translations/WCAG21/Understanding/consistent-navigation.html)

適合レベル AA

##### 十分な達成方法

- [G61: 毎回同じ相対的順序で繰り返されるコンポーネントを提示する](https://waic.jp/translations/WCAG21/Techniques/general/G61)

##### 参考達成方法

- [PDF14: PDF 文書内に連続するヘッダーとフッターを提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF14)
- [PDF17: PDF 文書に一貫性のあるページ番号を指定する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF17)

##### 失敗例

- [F66: 達成基準 3.2.3 の失敗例 － 異なるページでさまざまな相対的な順序でナビゲーションリンクを提示している](https://waic.jp/translations/WCAG21/Techniques/failures/F66)

#### [3.2.4 一貫した識別性](https://waic.jp/translations/WCAG21/Understanding/consistent-identification.html)

適合レベル AA

##### 十分な達成方法

- 次を同時に満たす
    - [G197: 同じ機能を有するコンテンツに対して、一貫したラベル、名前 (name) 及びテキストによる代替を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G197)
    - 達成基準 1.1.1 を満たすことのできる達成方法、かつ、達成基準 4.1.2 を満たすことのできる達成方法に従ってラベル、名前 (name)、テキストによる代替を提供する

#### [3.2.5 要求による変化](https://waic.jp/translations/WCAG21/Understanding/change-on-request.html)

適合レベル AAA

##### 十分な達成方法

###### 状況 A: ウェブページが自動更新を行う場合

- [G76: 自動的に更新する代わりに、利用者がコンテンツの更新を要求するメカニズムを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G76)

###### 状況 B: 自動リダイレクトが可能な場合

- [SVR1: クライアントサイドではなく、サーバーサイドで自動リダイレクトを実装する](https://waic.jp/translations/WCAG21/Techniques/server-side-script/SVR1)
- 以下のいずれかの方法を用いて [G110: クライアントサイドの瞬間的なリダイレクトを使用する](https://waic.jp/translations/WCAG21/Techniques/general/G110)
  - [H76: クライアントサイドで瞬間的にリダイレクトするために、meta 要素の refresh を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H76)

###### 状況 C: ウェブページがポップアップウィンドウを用いる場合

- 次の達成方法の一つを用いてポップアップウィンドウを表示する
  - [H83: 利用者の要求に応じて新しいウィンドウを開くために target 属性を使用して、そのことをリンクテキストで明示する](https://waic.jp/translations/WCAG21/Techniques/html/H83)
  - [SCR24: 利用者の要求に応じて新しいウィンドウを開くために、プログレッシブエンハンスメントを使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR24)

###### 状況 D: select 要素上で onchange イベントを用いる場合

- [SCR19: select 要素の onchange イベントは、コンテキストの変化を引き起こすことのないように使用する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR19)

##### 参考達成方法

- [G200: 必要なときにのみリンク先を新しいウィンドウ及びタブで開く](https://waic.jp/translations/WCAG21/Techniques/general/G200)

##### 失敗例

- [F60: 達成基準 3.2.5 の失敗例 － 利用者が入力フィールドにテキストを入力したときに新しいウィンドウを開く](https://waic.jp/translations/WCAG21/Techniques/failures/F60)
- [F61: 達成基準 3.2.5 の失敗例 － 利用者がコンテンツの中から無効にできない自動的な更新によってメインコンテンツの変更を完了する](https://waic.jp/translations/WCAG21/Techniques/failures/F61)
- [F9: 達成基準 3.2.5 の失敗例 － 利用者がフォーカスをフォーム要素から移動するときにコンテキストを変化させる](https://waic.jp/translations/WCAG21/Techniques/failures/F9)
- [F22: 達成基準 3.2.5 の失敗例 － 利用者が要求していないウィンドウを開く](https://waic.jp/translations/WCAG21/Techniques/failures/F22)
- [F52: 達成基準 3.2.1 の失敗例 － 新しいページを読み込むのと同時に、新しいウィンドウを開いている](https://waic.jp/translations/WCAG21/Techniques/failures/F52)
- [F40: 達成基準 2.2.1 及び達成基準 2.2.4 の失敗例 － 制限時間付きの meta 要素リダイレクトを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F40)
- [F41: 達成基準 2.2.1、達成基準 2.2.4、及び達成基準 3.2.5 の失敗例 － ページを再読み込みするために、meta 要素リフレッシュを使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F41)

### [3.3 入力支援](https://waic.jp/translations/WCAG21/Understanding/input-assistance.html)

#### [3.3.1 エラーの特定](https://waic.jp/translations/WCAG21/Understanding/error-identification.html)

適合レベル A

##### 十分な達成方法

###### 状況 A: フォームが利用者からの情報が必須である入力フィールドを含む場合

- [G83: 入力が完了していない必須項目を特定するために、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G83)
- [ARIA21: エラーフィールドを示すために aria-invalid を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA21)
- [SCR18: クライアントサイドのバリデーション及びアラートを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR18)
- [PDF5: PDF フォームで必須項目のフォームコントロールを示す](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF5)

###### 状況 B: 利用者によって提供される情報が、特別なデータフォーマットか特定の値であることが求められる場合

- [ARIA18: エラーを特定するために aria-alertdialog を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA18)
- [ARIA19: エラーを特定するために、ARIA role=alert 又はライブリージョン (Live Regions) を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA19)
- [ARIA21: エラーフィールドを示すために aria-invalid を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA21)
- [G84: 利用者が許可された値のリストにない情報を与えた場合に、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G84)
- [G85: 利用者の入力が要求されたフォーマット又は値の範囲外の場合に、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G85)
- [SCR18: クライアントサイドのバリデーション及びアラートを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR18)
- [SCR32: クライアントサイドのバリデーションを提供し、DOM を介してエラーテキストを追加する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR32)
- [PDF22: PDF フォームにおいて、利用者の入力が必須形式又は値の範囲外となった場合に、そのことを明示する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF22)

##### 参考達成方法

- [G139: 利用者がエラー箇所に移動できるメカニズムを作成する](https://waic.jp/translations/WCAG21/Techniques/general/G139)
- [G199: データが正常に送信されたときに、フィードバックを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G199)

#### [3.3.2 ラベル又は説明](https://waic.jp/translations/WCAG21/Understanding/labels-or-instructions.html)

適合レベル A

##### 十分な達成方法

- [G131: 説明的なラベルを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G131) かつ 以下のうちからいずれか一つ
  - [ARIA1: ユーザインタフェース コントロールに対する説明ラベルを提供するために、aria-describedby プロパティを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA1)
  - [ARIA9: 複数のテキストノードをつなげて一つのラベルにするために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA9)
  - [ARIA17: 関連するフォームコントロールを特定するために、グルーピングロールを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA17)
  - [G89: 期待されるデータ書式及び入力例を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G89)
  - [G184: フォーム又はテキストフィールド一式の先頭に、必須の入力を記述するテキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G184)
  - [G162: 関係性を最大限に予測できるようにするためにラベルを配置する](https://waic.jp/translations/WCAG21/Techniques/general/G162)
  - [G83: 入力が完了していない必須項目を特定するために、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G83)
  - [H90: label 要素又は legend 要素を使用して、必須のフォームコントロールを明示する](https://waic.jp/translations/WCAG21/Techniques/html/H90)
  - [PDF5: PDF フォームで必須項目のフォームコントロールを示す](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF5)
- [H44: テキストラベルとフォームコントロールを関連付けるために、label 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H44)
- [PDF10: PDF 文書内のインタラクティブなフォームコントロールにラベルを付ける](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF10)
- [H71: fieldset 要素及び legend 要素を使用して、フォームコントロールのグループに関する説明を提供する](https://waic.jp/translations/WCAG21/Techniques/html/H71)
- [G167: テキストフィールドの目的をラベル付けするために隣接するボタンを用いる](https://waic.jp/translations/WCAG21/Techniques/general/G167)

##### 参考達成方法

- [G13: コンテキストの変化を引き起こすフォームコントロールへの変更が行われる前に、何が起こるのかを説明する](https://waic.jp/translations/WCAG21/Techniques/general/G13)

##### 失敗例

- [F82: 達成基準 3.3.2 の失敗例 － 電話番号のフィールド一式を視覚的にフォーマットしているが、テキストラベルを含んでいない](https://waic.jp/translations/WCAG21/Techniques/failures/F82)

#### [3.3.3 エラー修正の提案](https://waic.jp/translations/WCAG21/Understanding/error-suggestion.html)

適合レベル AA

##### 十分な達成方法

###### 状況 A: 必須のフィールドに情報が入力されていない場合

- [G83: 入力が完了していない必須項目を特定するために、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G83)
- [ARIA2: aria-required プロパティによって必須項目を特定する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA2)
- [PDF5: PDF フォームで必須項目のフォームコントロールを示す](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF5)

###### 状況 B: フィールドの情報に、特別のデータフォーマットが要求される場合

- [ARIA18: エラーを特定するために aria-alertdialog を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA18)
- [G85: 利用者の入力が要求されたフォーマット又は値の範囲外の場合に、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G85)
- [G177: テキストの修正候補を提示する](https://waic.jp/translations/WCAG21/Techniques/general/G177)
- [SCR18: クライアントサイドのバリデーション及びアラートを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR18)
- [SCR32: クライアントサイドのバリデーションを提供し、DOM を介してエラーテキストを追加する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR32)
- [PDF22: PDF フォームにおいて、利用者の入力が必須形式又は値の範囲外となった場合に、そのことを明示する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF22)

###### 状況 C: 利用者の入力する情報は、複数の限定された値のうちの一つであることが要求される場合

- [ARIA18: エラーを特定するために aria-alertdialog を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA18)
- [G84: 利用者が許可された値のリストにない情報を与えた場合に、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G84)
- [G177: テキストの修正候補を提示する](https://waic.jp/translations/WCAG21/Techniques/general/G177)
- [SCR18: クライアントサイドのバリデーション及びアラートを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR18)
- [SCR32: クライアントサイドのバリデーションを提供し、DOM を介してエラーテキストを追加する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR32)
- [PDF22: PDF フォームにおいて、利用者の入力が必須形式又は値の範囲外となった場合に、そのことを明示する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF22)

##### 参考達成方法

- [G139: 利用者がエラー箇所に移動できるメカニズムを作成する](https://waic.jp/translations/WCAG21/Techniques/general/G139)
- [G199: データが正常に送信されたときに、フィードバックを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G199)

#### [3.3.4 誤り防止 (法的、金融、データ)](https://waic.jp/translations/WCAG21/Understanding/error-prevention-legal-financial-data.html)

適合レベル AA

##### 十分な達成方法

###### 状況 A: アプリケーションで、購入又は所得税申告の提出のように、法的なトランザクションが発生する場合

- [G164: オンラインリクエスト後に、利用者がそのリクエスト (又はトランザクション) を修正又はキャンセルできる一定の時間を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G164)
- [G98: 送信する前に、利用者が回答を確認及び修正できるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G98)
- [G155: 送信ボタンに加えてチェックボックスを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G155)

###### 状況 B: 利用者のアクションによって情報が削除される可能性がある場合

- [G99: 削除した情報を復元する機能を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G99)
- [G168: 選択されたアクションを続行するために確認を求める](https://waic.jp/translations/WCAG21/Techniques/general/G168)
- [G155: 送信ボタンに加えてチェックボックスを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G155)

###### 状況 C: ウェブページに試験を実施するアプリケーションがある場合

- [G98: 送信する前に、利用者が回答を確認及び修正できるようにする](https://waic.jp/translations/WCAG21/Techniques/general/G98)
- [G168: 選択されたアクションを続行するために確認を求める](https://waic.jp/translations/WCAG21/Techniques/general/G168)

##### 参考達成方法

- [SCR18: クライアントサイドのバリデーション及びアラートを提供する](https://waic.jp/translations/WCAG21/Techniques/client-side-script/SCR18)
- [G199: データが正常に送信されたときに、フィードバックを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G199)

#### [3.3.5 ヘルプ](https://waic.jp/translations/WCAG21/Understanding/help.html)

適合レベル AAA

##### 十分な達成方法

###### 状況 A: フォームがテキスト入力を求める場合

- [G71: すべてのウェブページにヘルプへのリンクを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G71)
- [G193: ウェブページでアシスタントによるヘルプを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G193)
- [G194: テキスト入力に対するスペルチェック及び修正候補を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G194)
- [G184: フォーム又はテキストフィールド一式の先頭に、必須の入力を記述するテキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G184)

###### 状況 B: フォームが所定のデータフォーマットでのテキスト入力を求める場合

- [G89: 期待されるデータ書式及び入力例を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G89)
- [G184: フォーム又はテキストフィールド一式の先頭に、必須の入力を記述するテキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G184)

##### 参考達成方法

- [H89: コンテキストに応じたヘルプを提供するために、title 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H89)

#### [3.3.6 誤り防止 (すべて)](https://waic.jp/translations/WCAG21/Understanding/error-prevention-all.html)

適合レベル AAA

##### 十分な達成方法

- 利用者に情報の送信を要求するすべてのフォームにおいて、達成基準 3.3.4 を満たすことのできる達成方法に従うこと。

## 堅牢 (robust)

### [4.1 互換性](https://waic.jp/translations/WCAG21/Understanding/compatible.html)

#### [4.1.1 構文解析](https://waic.jp/translations/WCAG21/Understanding/parsing.html)

適合レベル A

##### 十分な達成方法

- [G134: ウェブページをバリデートする](https://waic.jp/translations/WCAG21/Techniques/general/G134)
- [G192: 仕様に完全に準拠する](https://waic.jp/translations/WCAG21/Techniques/general/G192)
- [H88: 仕様に準じて HTML を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H88)
- 以下のいずれかの方法で、ウェブページが正しく解析できることを確認する
    - 以下をすべて満たす
        - [H74: 開始タグ及び終了タグを仕様に準じて使用していることを確認する](https://waic.jp/translations/WCAG21/Techniques/html/H74)
        - [H93: ウェブページの id 属性値が一意的 (ユニーク) であるようにする](https://waic.jp/translations/WCAG21/Techniques/html/H93)
        - [H94: 要素には重複した属性がないようにする](https://waic.jp/translations/WCAG21/Techniques/html/H94)
    - [H75: ウェブページが well-formed であることを確認する](https://waic.jp/translations/WCAG21/Techniques/html/H75)

##### 失敗例

- [F70: 達成基準 4.1.1 の失敗例 － 開始タグ及び終了タグ、又は属性のマークアップを誤って使用している](https://waic.jp/translations/WCAG21/Techniques/failures/F70)
- [F77: 達成基準 4.1.1 の失敗例 － ID 型の値が重複している](https://waic.jp/translations/WCAG21/Techniques/failures/F77)

#### [4.1.2 名前 (name)・役割 (role)・値 (value)](https://waic.jp/translations/WCAG21/Understanding/name-role-value.html)

適合レベル A

##### 十分な達成方法

そのコンテンツに合致する状況を以下から選択すること。それぞれの状況には、WCAG ワーキンググループがその状況において十分であると判断する、番号付の達成方法 (又は、達成方法の組み合わせ) がある。

###### 状況 A: マークアップ言語 (例えば HTML) で標準的なユーザインタフェース コンポーネントを使用している場合

- [ARIA14: 可視ラベルが使用できない場所で不可視ラベルを提供するために、aria-label を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: ユーザインタフェース コントロールの名前 (name) を提供するために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA16)
- 下記の技術固有の達成方法を用いて、[G108: 名前 (name) 及び役割 (role) を公開し、利用者が設定可能なプロパティを直接設定可能にして、変化の通知を提供するために、マークアップを用いる](https://waic.jp/translations/WCAG21/Techniques/general/G108)
  - [H91: HTML のフォームコントロール及びリンクを使用する](https://waic.jp/translations/WCAG21/Techniques/html/H91)
  - [H44: テキストラベルとフォームコントロールを関連付けるために、label 要素を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H44)
  - [H64: frame 要素及び iframe 要素の title 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H64)
  - [H65: label 要素を使用できない場合に、フォームコントロールを特定するために、title 属性を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H65)
  - [H88: 仕様に準じて HTML を使用する](https://waic.jp/translations/WCAG21/Techniques/html/H88)

###### 状況 B: スクリプト又はコードを用いて、マークアップ言語の標準的なユーザインタフェース コンポーネント再定義する場合

- 名前及び役割をユーザエージェントに提供し、利用者が設定可能なプロパティを直接設定可能にし、変化を通知する
  - [ARIA16: ユーザインタフェース コントロールの名前 (name) を提供するために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA16)

###### 状況 C: プログラミング技術で標準的なユーザインタフェース コンポーネントを用いる場合

- 下記の技術固有の達成方法を用いて[G135: 名前 (name) 及び変更の通知を公開するためのアクセシビリティ API 機能を使用する](https://waic.jp/translations/WCAG21/Techniques/general/G135)
  - [PDF10: PDF 文書内のインタラクティブなフォームコントロールにラベルを付ける](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF10)
  - [PDF12: PDF 文書内のフォームフィールドの名前 (name)、役割 (role)、値 (value) 情報を提供する](https://waic.jp/translations/WCAG21/Techniques/pdf/PDF12)

###### 状況 D: プログラミング言語で独自のインタフェースコンポーネントを作成する場合

- 下記の技術固有の達成方法を用いて、[名前 (name) 及び役割 (role) を取得し、利用者が設定可能なプロパティを直接設定可能にし、変化を通知するためにユーザエージェントが動作する、プラットフォームのアクセシビリティ API 機能をサポートするウェブコンテンツ技術を用いて、コンポーネントを作成する](https://waic.jp/translations/WCAG21/Techniques/general/G10)
  - [ARIA4: ユーザインタフェース コンポーネントの役割 (role) を明示するために、WAI-ARIA ロールを使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA4)
  - [ARIA5: ユーザインタフェース コンポーネントの状態 (state) を明示するために、WAI-ARIA ステート及びプロパティ属性を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA5)
  - [ARIA16: ユーザインタフェース コントロールの名前 (name) を提供するために、aria-labelledby を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA16)

##### 失敗例

- [F59: 達成基準 4.1.2 の失敗例 － コントロールに役割 (role) を提供せずに、HTML の div 要素又は span 要素をユーザインタフェースコントロールにするために、スクリプトを用いている](https://waic.jp/translations/WCAG21/Techniques/failures/F59)
- [F15: 達成基準 4.1.2 の失敗例 － ウェブコンテンツ技術のアクセシビリティ API を用いていない、又は不完全なカスタムコントロールを実装している](https://waic.jp/translations/WCAG21/Techniques/failures/F15)
- [F20: 達成基準 1.1.1 及び達成基準 4.1.2 の失敗例 － 非テキストコンテンツへの変更が発生するときにテキストによる代替を更新していない](https://waic.jp/translations/WCAG21/Techniques/failures/F20)
- [F68: 達成基準 4.1.2 の失敗例 － プログラムによる解釈が可能な名前 (name) を持っていないユーザインタフェース コントロール](https://waic.jp/translations/WCAG21/Techniques/failures/F68)
- [F79: 達成基準 4.1.2 の失敗例 － プログラムによる解釈が可能ではない、又は変更の通知が利用可能ではないようなユーザインタフェース コンポーネントのフォーカス状態](https://waic.jp/translations/WCAG21/Techniques/failures/F79)
- [F86: 達成基準 4.1.2 の失敗例 － アメリカの電話番号など、複数に分けられたテキストフィールドのそれぞれに対して、名前 (name) が提供されていない](https://waic.jp/translations/WCAG21/Techniques/failures/F86)
- [F89: 達成基準 2.4.4、達成基準 2.4.9、及び達成基準 4.1.2 の失敗例 － リンクで唯一のコンテンツである画像にアクセシブルな名前 (accessible name) が提供されていない](https://waic.jp/translations/WCAG21/Techniques/failures/F89)

#### [4.1.3 ステータスメッセージ](https://waic.jp/translations/WCAG21/Understanding/status-messages.html)

適合レベル AA

##### 十分な達成方法

###### 状況 A: ステータスメッセージが動作の成功もしくは結果、又はアプリケーションの状態を通知する場合

- [ARIA22: ステータスメッセージを提示するために role=status を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA22) と次のいずれかと組み合わせる
  - [G199: データが正常に送信されたときに、フィードバックを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G199)

###### 状況 B: ステータスメッセージが提案、又はエラーの存在に関する警告を伝える場合

- [ARIA19: エラーを特定するために、ARIA role=alert 又はライブリージョン (Live Regions) を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA19)と次のいずれかと組み合わせる
  - [G83: 入力が完了していない必須項目を特定するために、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G83)
  - [G84: 利用者が許可された値のリストにない情報を与えた場合に、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G84)
  - [G85: 利用者の入力が要求されたフォーマット又は値の範囲外の場合に、テキストの説明を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G85)
  - [G177: テキストの修正候補を提示する](https://waic.jp/translations/WCAG21/Techniques/general/G177)
  - [G194: テキスト入力に対するスペルチェック及び修正候補を提供する](https://waic.jp/translations/WCAG21/Techniques/general/G194)

###### 状況 C: ステータスメッセージがプロセスの進行に関する情報を伝える場合

- [ARIA23: 逐次的な情報更新を識別するために role=log を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA23)
- `role="progressbar"` を使用する
- 以下を組み合わせる
    - [ARIA22: ステータスメッセージを提示するために role=status を使用する](https://waic.jp/translations/WCAG21/Techniques/aria/ARIA22) 
    - [G193: ウェブページでアシスタントによるヘルプを提供する](https://waic.jp/translations/WCAG21/Techniques/general/G193)を組み合わせる

## その他の解説書の文書

- [WCAG 2.1 解説書のイントロダクション](https://waic.jp/translations/WCAG21/Understanding/intro.html)
- [WCAG 達成基準の達成方法を理解する](https://waic.jp/translations/WCAG21/Understanding/understanding-techniques.html)
- [ACT ルールを理解する](https://waic.jp/translations/WCAG21/Understanding/understanding-act-rules)
- [適合を理解する](https://waic.jp/translations/WCAG21/Understanding/conformance.html)
- [他の文書からの WCAG の参照方法](https://waic.jp/translations/WCAG21/Understanding/refer-to-wcag.html)
- [ウェブコンテンツ技術の使用法のアクセシビリティサポートを文書化する](https://waic.jp/translations/WCAG21/Understanding/documenting-accessibility-support.html)
- [メタデータを理解する](https://waic.jp/translations/WCAG21/Understanding/understanding-metadata.html)
