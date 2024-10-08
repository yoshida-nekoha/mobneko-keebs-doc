---
title: シン禊 ビルドガイド
authors: [nekoha]
date: 2024-09-03
# image: ./misogi-QR.png
draft: true
---

## シン禊 の特徴

禊をベースに、LowProfile 対応で薄型化した「シン禊」です。  
禊シリーズの特徴でもある単４をあきらめ、AAAA 電池搭載でより高さを抑える設計にしました。

## パーツリスト

- キットに付属するもの

  - 基盤
  - スイッチプレート
  - ボトムケース
  - トップケース
  - M3x8mm 6 本
  - ゴム足 3 個
  - 電源キット付きは以下も付属します
    - 昇圧回路
    - 電源スイッチ
    - 電池クリップ

- 別売り(ご自分で用意してください)
  - choc v2 互換スイッチソケット 34 個
  - 上記ソケットと互換性のあるキースイッチ 34 個
  - 上記キースイッチと互換性のあるキーキャップ 1u 34 個
  - マイコンボード
    - `Pro Micro` or `BLE Micro Pro`(下記参照)
  - 12pin か 13pin のコンスルー、またはピンヘッダ、高さは 2.5mm

### 参考購入先

- Pro Micro
  - [Pro Micro Type-C 版: 遊舎工房](https://shop.yushakobo.jp/products/3905)
- BLE Micro Pro
  - [BLE Micro Pro Type-C 版: 遊舎工房](https://shop.yushakobo.jp/products/ble-micro-pro?variant=37665571340449)
  - [Pro Micro サイズの USB 対応 nRF52 マイコンボード: のぎけす屋](https://booth.pm/ja/items/1177319)
- 電源キット(キットに付属していますので、スペアが必要なら)
  - [XCL103 使用 3.3V 出力昇圧 DCDC コンバーターキット: 秋月電子](https://akizukidenshi.com/catalog/g/g116116/)
    - 品薄・・・
    - [3.3V 出力昇圧 DCDC コンバーター: 秋月電子](https://akizukidenshi.com/catalog/g/g113066/)も互換性ありそう
  - [電池ボックス 単 4×1 本 ピン: 秋月電子](https://akizukidenshi.com/catalog/g/g102670/)
  - [基板用小型 3P トグルスイッチ 1 回路 2 接点: 秋月電子](https://akizukidenshi.com/catalog/g/g112407/)
  - [押しボタンスイッチ 黒・オルタネート 6mm 角 PB-22E60L: 秋月電子](https://akizukidenshi.com/catalog/g/g115968/)
- MX 互換 PCB ソケット
  - [110pcs/90pcs Kailh Hot-swappable PCB Socket CPG151101S11 For Outemu Cherry MX Switches Mechanical Keyboard Axis DIY Connector](https://s.click.aliexpress.com/e/_DkXFQeR)

## ソケットの取り付け

choc 互換のソケット(34 個)を用意し、ハンダ付けしてください。

## 電源部品の組付け

BMP を使う場合は電池ボックス、電源スイッチ、昇圧コンバータを組み付けます。

### 昇圧コンバータの取り付け

基盤の `I`, `G`, `O` とコンバータの `I`, `G`, `O` を合わせるようにはんだ付けしてください。

反対側の端子 3 つは未使用で、どこにもつながっていません。  
必須ではないですが、ぐらつかないようにもはんだ付けしても大丈夫です(ショートはさせないでください)。

### 電池クリップの取り付け

クリップをはんだ付けします。  
クリップはニッケルなのでくっつきにくいです。フラックスがあるといくらか楽です。

電池は、左側が `+` になるように設置してください。

### 電源スイッチの取り付け

電源スイッチは、取付向きに注意してください。  
押し込んだときに ON にしたい場合は写真のような向きで配置します。

## マイコンボードの取り付け

マイコンボードを組み付け、ファームウェアを書き込みます。  
`Vial` に対応しています。

配布バージョンのキーマップは私が普段から愛用しているものですが、ちょっとクセがあるかもしれません。  
ご自身で最適なキーマップを探求してください！

→ [クセありなキーマップの紹介はこちら](/blog/2024/07/13/keymaps)

### 無線化しない場合(ProMicro)

通常の `Pro Micro` を使います。  
**マイコンボードは背面(電子パーツが少ない方)**が上になります(基盤にプリントされているのピン配置と合うように確認してください)。
コンスルーまたはピンヘッダは USB 端子の上面が基盤から 4mm 以内となるような高さにしてください。

- `Pro Micro` の場合、基盤の一番外側にあるピンは使いません(向かって左側を 1 つあける)
- [Pro Micro 版ファームウェアをダウンロード](/firmwares/禊v3/promicro-misogi-v3.zip)
- [QMK toolbox](https://github.com/qmk/qmk_toolbox/releases)などを使ってファームウェアを書き込んでください
- ファームウェア書き込みが終わったら[Vial Web](https://vial.rocks/)からキーマップをリアルタイムに編集できます！
  - 繋がらない場合はいったんケーブルを抜いて再接続してみてください

**※ Pro Micro のバリエーション**  
`Pro Micro` の種類によっては、USB Type-C to Type-C での接続ができません。  
遊舎工房で扱っている[Pro Micro Type-C 版](https://shop.yushakobo.jp/products/3905)では動作確認できています。  
[AliExpress などでも買えます](https://www.aliexpress.com/item/1005004900131198.html)が、PC 側が Type-A しか対応していない場合もあります。  
お手持ちのマイコンボードボードが Type-C 接続に対応しているかの質問には答えられませんのでご了承ください。

### 無線化する場合(BLE Micro Pro)

無線化には `BLE Micro Pro` を使います。  
**マイコンボードは背面(電子パーツが少ない方)**が上になります(基盤にプリントされているのピン配置と合うように確認してください)。
コンスルーまたはピンヘッダは高さ `2.5mm` のタイプを選んでください。  
USB 端子の逆側 1 ピンは使っていないので ProMicro 用の 12 ピンコンスルーでも動作します。

1. [ブートローダーをアップデートする](https://sekigon-gonnoc.github.io/BLE-Micro-Pro-WebConfigurator/#/update/bootloader)
   1. バージョン `ble_micro_pro_bootloader_1_2_0` を選び、BMP を USB 接続して `Update` をクリック
   2. 接続、書き込みが終わったら次に進むようメッセージが表示されます
   3. 1 回目は接続だけで終わってしまうことがあるので、表示メッセージを確認してください
2. [アプリケーションをアップデートする](https://sekigon-gonnoc.github.io/BLE-Micro-Pro-WebConfigurator/#/update/application)
   1. バージョン `ble_micro_pro_vial_1_2_0` を選び、BMP を USB 接続して `Update` をクリック
   2. 接続、書き込みが終わったら次に進むようメッセージが表示されます
   3. 1 回目は接続だけで終わってしまうことがあるので、表示メッセージを確認してください
3. [BMP 版ファームウェアをダウンロード](/firmwares/禊v3/bmp-misogi-v3.zip)して解凍
4. マイコンボードを USB 接続すると、ドライブとして認識されます
   1. 解凍したファイルを上書きコピーしてください
5. コピーが終わったら[Vial Web](https://vial.rocks/)からキーマップをリアルタイムに編集できます！
   1. 繋がらない場合はいったんケーブルを抜いて再接続してみてください(初回はちょっと不安定)

#### BMP 使用時の補足

- USB から給電されていない状態でバックライトは光りません

## ボトムケース、トップケースの取り付け

トップケースに基盤がぶら下がり、その下をボトムケースが支える構造になっています。  
キーキャップは全部つけるとケースをばらしにくくなるので最後に取り付けてください。

- ボトムケースに PCB 基盤を載せます
- スイッチプレートを載せます
- 向きに注意して、ゆっくり確実にキースイッチを差し込んでいきます
- ここで一回 vial の Matrix Tester で動作確認をして、すべてのキーが反応することを確認してください。
- その上からトップケースをかぶせます
- 裏返してボトム外周部 6 箇所の穴を付属の M2 ネジで締めます

### 締め付け時の注意

- プラスチックなので強い力には耐えられません

## ゴム足の貼付け

3D プリンタケースは微妙に反りやすく、底面がまっすぐになっていないです。  
厚いデスクマットの上ならそのまま使えますが、硬い机の上で使うならゴム足があったほうが良いです。

- キーボードの奥側、ねじの横に 2 点
- キーボードの手前側、中央に 1 点

の 3 点に貼り付けることで安定します(キット内付属のゴム足も 3 点のみ同梱です)。  
4 点以上つけてしまうと反りのせいで逆に安定しません。

以上で完成となります、お疲れ様でした！  
[#misogi34](https://x.com/search?q=%23misogi34) のハッシュタグをつけて投稿してもらえると励みになります！

## 付録

- [3D プリント用 STL ファイル](/firmwares/禊v3/stl-thin-misogi-v3.zip)
