# アプリ名：臨床工学技士国家試験対策

## 概要

隙間時間に国家試験の勉強ができるスマホアプリです。

## 背景

前回、web 版でこのアプリを作成しましたがスマホ版においてもアプリ開発をしたいと思い、今回作成しました。

## 機能一覧

- 国家試験の分野別選択機能
- 全ての分野別の問題をランダムに解くことができる機能
- 解答確認機能
- ユーザーが制限時間や問題数、効果音の有無を設定できる機能

## 工夫点

- ユーザーが制限時間や問題数を任意に設定できるようにしました。
- ストレージを用いて、アプリをタスクキルしてもユーザーが設定した状態を保持できるようにしました。

## 使用技術一覧

- expo v48.0.10
- React.js v18.2.0
  - React-Navigation v6.1.6
- ReactNative v0.71.6
- ReduxToolkit v1.9.5

- 開発環境
  - MacBookAir(M1)
  - OS(Monterey / 12.2.1)
  - VScode

## 今後実装したい機能

- 効果音を選択できる機能
