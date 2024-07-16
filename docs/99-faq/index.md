---
title: トラブルシューティング
authors: [nekoha]
date: 2024-07-16
---

## FAQ

### BLE Micro Pro(BMP)の入手先

下記サイトで購入できます(管理は私ではないです)。

- [BLE Micro Pro Type-C 版: 遊舎工房](https://shop.yushakobo.jp/products/ble-micro-pro?variant=37665571340449)
- [Pro Micro サイズの USB 対応 nRF52 マイコンボード: のぎけす屋](https://booth.pm/ja/items/1177319)

品切れになっていたら、入荷連絡メールに登録してしばらく待ちましょう・・・

## トラブルシューティング

### キーボードが認識されない(Pro Micro)

たまに発生します。  
USB を抜く → 数秒待つ → 再度挿すを試してください。

### 一部のキーが反応しない

`Z`,`X`,`.`,`/`などが反応しない場合。  
配布バージョンではこれらのキーにちょん押しと長押しで別の`Ctrl`や`Shift`キーを割り当てています(同様のキーが他にもあります)。  
お好みで [Vial](https://vial.rocks/) からキーマップを変更してください。

### キーボードが認識されない(BLE Micro Pro)

ファームウェア書き込み直後はよく発生するようです(Qiita 記事にも紹介されていました)。  
USB を抜く → 数秒待つ → 再度挿すを試してください。

→ [BLE Micro Pro の Vial 対応で詰まったことのメモ](https://qiita.com/unbosoms/items/d408894af1fb3d7295cf)

### Vial で認識されない

私の環境のみかもしれませんが、Windows+KVM(複数の PC からモニタと USB を切り替える機器) でキーボードと PC が直接つながっていない場合に Vial が認識してくれませんでした。  
PC とキーボードを直接つなぐと使えるようになったので、この症状が出たら試してみてください。

なお、Mac では USB ハブ+KVM を通していても問題なく使えました。

### Remap で認識されない

配布ファームウェアは、`Remap` に対応していません。  
`Vial` をご利用ください。

→ [https://vial.rocks/](https://vial.rocks/)
