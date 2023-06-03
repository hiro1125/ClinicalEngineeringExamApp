import { TAGS_TEXT } from './index';
import { QuizData } from '../../types/type';

export const biomedicalMeasurementInstrumentationData: QuizData[] = [
  /** 28回(AM) */
  {
    question: 'サーマルアレイレコーダについて誤っているのはどれか。',
    options: [
      '1mmに16個程度のサーマルヘッドが並んでいる',
      'サーマルヘッドはミリ秒オーダで加熱される',
      'DAコンパータによって発色位置を決める',
      '周波数応答は2~3kHzの応答速度をもっている',
      '波形だけでなく文字も記録可能である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'ディジタル心電計におけるaVRの計算式はどれか。ただし、I、II、IIIは標準肢誘導を表す。',
    options: ['I-II/2', '-(I+II)/2', 'II-I/2', '(II-III)-I', '3(I+III)/2'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '観血式血圧計の波形がひずむ原因はどれか。\na. ゼロ点調整不良 \nb. 血圧トランスデューサの高さ不良 \nc. カテーテル内での気泡混入 \nd. カテーテル先端での血栓形成 \ne. カテーテル先端での先当り ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心拍出量計測法でないのはどれか。',
    options: [
      '熱希釈法',
      '色素希釈法',
      '脈波伝搬速度法',
      '超音波断層法',
      '血圧波形解析法',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '赤外線を利用した呼吸関連計測装置はどれか。\na. スパイロメータ \nb. ニューモタコメータ \nc. インピーダンスプレスチモグラフ \nd. パルスオキシメータ \ne. カプノメータ ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '体温計測に用いるのはどれか。\na. ホール効果 \nb. マイスナー効果 \nc. ジョセフソン素子 \nd. サーモパイル \ne. サーミスタ ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '超音波画像計測について正しいのはどれか。',
    options: [
      '生体軟部組織での音速は約10km/sである',
      '軟組織よりも硬組織の方が音速は速い',
      '動きのある臓器の撮影には不適である',
      '約25kHzの音波を使用する',
      'ドプラ法で臓器の形状が得られる',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '単純エックス線撮影について正しいのはどれか。',
    options: [
      '臓器から反射したエックス線を撮影する',
      '造影剤はエックス線に対する透過性が高い',
      '動きがある臓器には使用しない',
      '高密度の器官はエックス線を吸収して陰影を作る',
      '体動の影響は少ない',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '治療機器のエネルギー作用について正しいのはどれか。\na. エネルギー密度に対する主作用はエネルギーの種類によらない \nb. 主作用は治療余裕度を超えるエネルギー密度で現れる \nc. 治療関値を超えるエネルギー密度で治療効果が現れる \nd. 副作用はエネルギー密度が大きくなると増大する \ne. 不可逆的な樟害は0.1mW/cm2を超えるエネルギー密度で現れる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  /** 28回(PM) */
  {
    question: '誤差について誤っているのはどれか。',
    options: [
      '偶然誤差は正規分布に従う',
      '偶然誤差は統計処理によって小さくできる',
      '系統誤差は校正によって除去できる',
      '測定値を2乗すると誤差は4倍になる',
      'n回の測定値を平均すると偶然誤差は1/√nとなる',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '小電力医用テレメータについて誤っているのはどれか。\na. 使用する周波数はUHF帯である \nb. 使用する周波数帯は6バンドである \nc. 送信機の空中線電力は20mW以下である \nd. A型の周波数帯域幅は25kHzである \ne. 混信対策のゾーンは色ラベルで表示する ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'ディジタル脳波計について誤っているのはどれか。',
    options: [
      '脳波導出にはシステムリファレンス電極が必要である',
      '脳波記録終了後にモンタージュの変更ができる',
      'サンプリング間隔は100ms程度である',
      '脳波記録終了後に表示感度の変更ができる',
      '脳波記録終了後にフィルタ特性の変更ができる',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'トランジツトタイム型超音波血流計の特徴で正しいのはどれか。\na. ゼロ点補正が必要である \nb. 体表面からの測定が可能である \nc. 伝搬速度を利用する \nd. 電気的に非干渉である \ne. 複数チャネルの同時計測が可能である ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '酸素ガスの分析計測手段はどれか。\na. ガルバニックセル \nb. 熱電対 \nc. サーミスタ \nd. セバリングハウス電極 \ne. クラーク電極 ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'MRIについて正しいのはどれか。\na. 放射線被曝がない \nb. 軟組織の画像化には適さない \nc. 体動に強い \nd. 酸素原子の空間分布を測定する \ne. 血流の情報が得られる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '核医学における画像測定について正しいのはどれか。\na. PETで糖代謝の撮像が可能である \nb. 体外から放射線を照射することで画像化する \nc. β線が測定の対象である \nd. SPECTで脳の血流量に関する撮像が可能である \ne. PETで3次元画像が得られる ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  /** 29回(AM) */
  {
    question: '物理量と単位との組合せで誤っているのはどれか。',
    options: [
      '応 力 -------- N/m2',
      '静電容量 -------- C/V',
      'コンダクタンス -------- V/A',
      'インダクタンス -------- Wb/A',
      '吸収線量 -------- J/kg',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '雑音対策について誤っているのはどれか。',
    options: [
      '電源線から混入する雑音の除去にラインフィルタが使われる',
      '商用交流雑音を除去するためにハムフィルタが使われる',
      '周波数の低い雑音の除去には移動平均が使われる',
      '信号の入力導線にはシールド線が使われる',
      '不規則雑音の除去には加算平均が使われる',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心電図用テレメータの送信機について誤っているのはどれか。',
    options: [
      '2GHz帯の周波数が用いられる',
      'A型のチャネル(中心周波数)の間隔は12.5kHzである',
      'B型はA型よりも占有周波数帯域幅が広い',
      'チャネル番号は4桁の数字で区別される',
      'A〜D型の空中線電力は1mW以下である',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '観血式血圧測定について正しいのはどれか。',
    options: [
      'チューブ内に気泡が混入すると平均血圧が下がる',
      '血管内に留置したカテーテル内を蒸留水で満たす',
      '加圧バッグの内圧は収縮期血圧に等しくする',
      'ゼロ校正の基準は中心静脈圧が使われる',
      'フラッシュデバイスは抗凝固薬の持続注入機能をもつ',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'カプノメータについて誤っているのはどれか。',
    options: [
      '二酸化炭素濃度をモニタする装置である',
      '赤外線の吸収量からガス濃度を求める',
      'メインストリーム方式は呼吸回路内が閉塞しやすい',
      'サイドストリーム方式は測定値に時間遅れが生じる',
      '亜酸化窒素を併用する際には補正が必要である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '超音波ドプラ血流計について正しいのはどれか。\na. 血流がプローブに向かっているとき、受信周波数は送信周波数よりも低くなる \nb. 超音波ビームの照射方向が血流方向に対して垂直なとき、ドプラシフトは観測されない \nc. 周波数折り返し現象は血流速度が速いほど起こりやすい \nd. パルス繰り返し周波数は超音波の振動周波数の2倍以上とする \ne. 最大計測深度はパルス繰り返し周波数が高いほど大きい ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'MRI検査について誤っているのはどれか。',
    options: [
      '水素原子の空間分布を画像化する',
      '軟部組織の画像化に適している',
      '血流の測定が可能である',
      '臓器の3次元構造を画像化できる',
      '動きのある臓器の撮影に適している',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  /** 29回(AM) */
  {
    question:
      '物理量が起電力に変換されるトランスデューサはどれか。\na. サーモパイル \nb. ホール素子 \nc. 差動トランス \nd. CdSセル \ne. ストレインゲージ ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '心電図誘導電極の右手と左手を逆に装着した。誤っているのはどれか。\na. aVRとaVLの波形が入れ替わる \nb. 第II誘導と第III誘導の波形が入れ替わる \nc. 第I誘導の波形が反転する \nd. aVFの波形が反転する \ne. 胸部誘導の波形が変化する ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '脳波計について正しいのはどれか。\na. 必要な周波数帯域は5.0〜60Hzである \nb. 低域遮断周波数を規定する時定数は0.03秒である \nc. 雑音レベルは3.0μVp-p以下である \nd. A/D変換時のサンプリング周波数は200 Hz以上である \ne. 最大感度は10μV/mmである ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心拍出量測定法について正しいのはどれか。',
    options: [
      '熱希釈法では約0°Cの注入液を用いる',
      '色素希釈法ではオキシヘモグロビンの量を計測する',
      'フィック法では二酸化炭素産生量から計算する',
      '超音波断層法では心房の容積から計算する',
      '血圧波形解析法ではスワンガンツカテーテルを用いる',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心拍出量測定法について正しいのはどれか。',
    options: [
      'pH -------- ガラス電極',
      '酸素分圧 -------- クラーク電極',
      '二酸化炭素分圧 -------- セバリングハウス電極',
      '酸素飽和度 -------- 赤色光および赤外線の吸光度',
      '経皮的二酸化炭素分圧 -------- 赤外線の吸光度',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '超音波診断装置について正しいのはどれか。\na. 被曝に伴う侵襲性がある \nb. 全身撮影が可能である \nc. 心室の壁厚を測定できる \nd. 血管内の画像が得られる \ne. 実時間の撮影が可能である ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'X線CTについて誤っているのはどれか。',
    options: [
      '臓器の立体的な構造を画像化する',
      '複数のX線検出器を使用する',
      '動画を撮影することが可能である',
      '空間分解能は1mm程度である',
      '組織のX線吸収係数を画像化する',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'PETについて誤っているのはどれか。',
    options: [
      '加速器を用いて作った核種を生体に投与する',
      'β線を検出して画像化する',
      'FDG-PETによって糖代謝の高い組織が可視化される',
      '陽電子は電子と同じ質量をもつ',
      '陽電子は電子と衝突して消滅する',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  /** 30回(AM) */
  {
    question: '誤差について正しいのはどれか。',
    options: [
      '計測器の目盛りの読み間違いによって偶然誤差が生じる',
      '計測器の校正を怠ると系統誤差が生じる',
      '量子力学的現象によって量子化誤差が生じる',
      '過失誤差は測定者によらず一定である',
      'n回の測定値を平均すると理論的誤差は1/nとなる',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '信号処理について正しい組合せはどれか。\na.周波数解析 -------- フーリエ変換 \nb.SN比改善 -------- 加算平均 \nc.信号平滑化 -------- 微分演算 \nd.輪郭強調 -------- 積分演算 \ne.面積計算 -------- 移動平均',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '心電図誘導で右手、左手、左足の電位が、それぞれ -6mV、1mV、5mV であるとき、aVLの電位[mV]はどれか。',
    options: ['-9', '-5', '1.5', '5', '7.5'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '心電図テレメータについて誤っているのはどれか。 \na.送信機のアンテナが長いほど送信効率がよい \nb.使用する専用周波数帯は各メーカ共通である \nc.混信対策としてゾーン配置が用いられる \nd.受信感度不足にはブースタが用いられる \ne.空中線電力は15mW以下である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'トランジットタイム型超音波血流計について正しいのはどれか。 \na.ドプラ効果を利用する \nb.ゼロ点補正が不要である \nc.体表面からの計測ができない \nd.順・逆方向の伝播時間差を利用している \ne.赤血球からの散乱波を利用する',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'スパイロメータで計測できないのはどれか。',
    options: ['最大吸気量', '予備吸気量', '1回換気量', '肺活量', '残気量'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'X線CT検査と比較して超音波検査の利点で正しいのはどれか。 \na.画質がよい \nb.視野が広い \nc.肺内病変の評価に向いている \nd.実時間画像が得られる \ne.携帯性に優れている',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '臨床用MRIについて正しいのはどれか。 \na.軟部組織の画像化に適している \nb.炭素原子の空間分布を画像化する \nc.水分の少ない組織の撮影に適している \nd.撮像法としてT1強調がある \ne.血管造影が可能である',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  /** 30回(PM) */
  {
    question: 'ディジタル式カラーモニタについて誤っているのはどれか。',
    options: [
      '波形を時間軸上で静止して見ることができる',
      '波形と文字を同時に表示できる',
      '複数の入力信号はシュミット回路で切り替える',
      '赤、緑、青の3 色分のメモリが必要である',
      '水平・垂直それぞれに同期信号発生器が必要である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '同相入力雑音電圧が100mVの環境下で1mVの心電図を入力したとき、同相雑音出力は1mV、心電図信号出力は100mVになった。同相除去比(CMRR)[dB]はどれか。',
    options: ['20', '40', '60', '80', '100'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '観血式血圧計測において測定ラインヘの血液の逆流が発生した。可能性のある原因はどれか。 \na.カテーテルの先当たり \nb.血栓形成 \nc.血圧測定ライン接続部分の緩み \nd.三方活栓の操作ミス \ne.加圧バッグの圧力不足',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心拍出量計測法で用いないのはどれか。',
    options: [
      'フィック法',
      '色素希釈法',
      '熱希釈法',
      'オシロメトリック法',
      '血圧波形解析法',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '体温計測について正しいのはどれか。',
    options: [
      '電子体温計ではサーモパイルが使われる',
      '耳用赤外線体温計は鼓膜からの熱伝導を利用している',
      '耳用赤外線体温計には量子型検出器が使われる',
      '深部体温計は熱流補償法を利用している',
      '深部体温計の温度プローブにはCdSが使われる',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'X 線CT 画像について正しいのはどれか。 \na.臓器の3次元構造が得られる \nb.画像再構成法として逆投影法がある \nc.血管の撮像が可能である \nd.X線を双方向に照射する \ne.空間分解能は1程度である',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '内視鏡について正しいのはどれか。 \na.血管内視鏡にはファイバスコープが使用される \nb.電子スコープの受光素子にはCdSeが使用される \nc.高速撮影のためにフォトトランジスタが使用される \nd.深部血管の撮影には赤色狭帯域光が使用される \ne.キセノンランプが光源に使用される',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  /** 31回(AM) */
  {
    question:
      '正しい組合せはどれか。\na.電気量 -------- クーロン \nb.エネルギー -------- ワット \nc.磁 束 -------- テスラ \nd.光 束 -------- ルーメン \ne.コンダクタンス -------- ジーメンス',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '雑音対策について誤っているのはどれか。',
    options: [
      '信号の入力導線にシールド線を使用する',
      '入力導線をまとめると電磁誘導による交流雑音が軽減できる',
      'ディジタルフィルタは演算によって雑音を除去する',
      '不規則雑音の低減化には加算平均を使用する',
      '高周波雑音はハムフィルタで除去する',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心電図テレメータについて誤っているのはどれか',
    options: [
      '送信機のチャネル番号は4桁の数字で表示する',
      '専用周波数帯は1GHz帯にある',
      'ディジタル変調方式にはFSKがある',
      'ダイバーシティ方式は受信感度の安定に役立つ',
      '同じ病棟内では同じ色ラベルの送信機を使用する',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '中心静脈圧の計測ができるのはどれか。',
    options: [
      '観血式測定法',
      'オシロメトリック法',
      'トノメトリ法',
      '容積補償法',
      '聴診法',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '酸素摂取量に基づく心拍出量計測法はどれか。',
    options: [
      'フィック法',
      '熱希釈法',
      '熱希釈法',
      '超音波断層法',
      '血圧波形解析法',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '差圧方式の呼吸計測装置はどれか。',
    options: [
      'ベネディクトロス型スパイロメータ',
      'フライシュ型ニューモタコグラフ',
      '熱線式流量計',
      '超音波流量計',
      'カプノメータ',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '超音波を用いた画像計測について誤っているのはどれか。',
    options: [
      '動画の撮影が可能である',
      'Mモードは弁の動きを描画できる',
      'Aモードでは断層像が得られる',
      'コンベックス走査はリニア走査より深部視野が広い',
      '血流の画像が得られる',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'ラジオアイソトープによる画像計測について誤っているのはどれか',
    options: [
      'PETの空間分解能はX線CTと同程度である',
      'PETでは陽電子の対消滅によるγ線を検出する',
      'SPECTでは人体の3次元構造を画像化する',
      '体内での放射線の散乱を考慮する必要がある',
      '体内での放射線の吸収を考慮する必要がある',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  /** 31回(PM) */
  {
    question: '雑音について誤っているのはどれか。',
    options: [
      '熱雑音は電子の不規則な運動によって発生する',
      'ショット雑音は半導体内部で発生する',
      'ハム雑音は商用交流によって発生する',
      '体内での放射線の散乱を考慮する必要がある',
      '体内での放射線の吸収を考慮する必要がある',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '心電図成分で高城通過フィルタの時定数を小さくすると最も影響する部分はどれか。',
    options: ['P', 'Q', 'R', 'ST', 'T'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '運動神経伝導速度の計測について誤っているのはどれか。 \na.計測には複合筋活動電位(CMAP)波を用いる \nb.神経部位の2ヵ所の電気刺激が必要である \nc.電気刺激はアイソレータを介して行う \nd.刺激電流のパルス幅は5~10msを用いる \ne.加算平均装置が必要である ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '超音波パルスドプラ血流計について正しいのはどれか。 \na.血流がプローブに向うとき受信周波数は送信周波数よりも低くなる \nb.超音波ビームが血流方向に対して垂直なときは測定できない \nc.周波数祈り返し現象は血流速度が速いほど起こりやすい \nd.パルス繰り返し周波数は超音波の振動周波数の2倍以上とする \ne.最大計測深度はパルス繰り返し周波数が高いほど大きい ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '体温計測について誤っているのはどれか。',
    options: [
      '電子体温計は測温体としてサーミスタを用いる',
      '予測式電子体温計は温度上昇曲線で体温を推定している',
      '深部体温計は熱流補償法を用いて核心温を測定する',
      '耳用赤外線体温計には量子型検出器が使われる',
      'サーモグラフは体表面の赤外線放射分布を画像化したものである',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'X線を使用した医用画像について正しいのはどれか。 \na.X線に対する臓器の反射率を画像化する \nb.X線CTの空間分解能は0.5~1mm程度である \nc.X線CTは臓器の立体構造を画像化できる \nd.造影剤はX線画像のコントラストを増強する \ne.体表面に近い臓器の画像化に適している',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '内視鏡画像計測の構成要素でないのはどれか。 \na.光ファイバ \nb.CCD \nc.レンズ \nd.光電子増倍管 \ne.検出コイル ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'マイクロ波手術装置で正しいのはどれか。 \na.ISM周波数を使用する \nb.同軸ケープルを使用する \nc.渦電流損で発熱する \nd.対極板を使用する \ne.組織を凝固する',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  /** 32回(AM) */
  {
    question:
      '相対誤差1%の電流計と相対誤差2%の電圧計を用いて電力を測定する場合、電力の相対誤差は何%となるか。',
    options: ['1', '2', '√5', '3', '5'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '生体用金属電極について正しいのはどれか。 \na.電極と生体間の接触面積を大きくすると電極接触インピーダンスは増加する \nb.周波数が高くなると電極接触インピーダンスは増加する \nc.電極用ペーストは電極接触インピーダンスを下げる効果がある \nd.新しい金属電極はエージング後の電極と比べて基線の変動が大きい \ne.電極電位は使用する金属の種類によって異なる',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心電図計測の誘導について誤っているのはどれか。',
    options: [
      '胸部誘導ではWilsonの結合点を基準電極として用いる',
      '左足から右手の電位を差し引いた誘導を第III誘導という',
      '差動増幅器のニュートラル端子には右足電極を接続する',
      'aVR誘導は左手と左足を結合した点を基準電極として用いる',
      '双極誘導の間にはII=I+IIIの関係がある',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'トランジットタイム型超音波血流計について正しいのはどれか。 \na.複数チャネルの同時計側か可能である \nb.電気的干渉を受けやすい \nc.測定開始前にゼロ点補正が必要である \nd.体外循環用のチューブで使用可能である \ne.内胸動脈グラフトで使用可能である',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'パルスオキシメータについて正しいのはどれか。 \na.測定時の校正が不要である \nb.指先以外では測定できない \nc.心原性ショック時でも測定できる \nd.赤外線2波長を用いる \ne.ヘモグロビンの吸光度を用いる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '血中二酸化炭素分圧の測定に用いられるのはどれか。',
    options: [
      'セバリングハウス電極',
      'サーモパイル',
      'クラーク電極',
      'ストレンゲージ',
      '熱線型白金電極',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '超音波を用いた医用画像計測で描出の最も困難な臓器はどれか。',
    options: ['心 臓', '乳 腺', '小 腸', '肝 臓', '腎 臓'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '磁気共鳴画像(MRI)について正しいのはどれか。 \na.撮影には被曝を伴う \nb.骨の撮像はできない \nc.軟部組織の撮像に適している \nd.動きのある臓器も撮像できる \ne.血管の撮像が可能である',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '誤っている組合せはどれか。\na.超短波治療器 -------- 高周波 \nb.筋刺激装置 -------- 光 \nc.X線装置 -------- 粒子線 \nd.ネブライザ -------- 超音波 \ne.除細動器 -------- パルス波',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  /** 32回(PM) */
  {
    question: '最も高い周波数成分まで記録する必要があるのはどれか。',
    options: ['筋電図', '心電図', '脳 波', '心音図', '容積脈波'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '標準紙送り速さで記録した心電図のR-R間隔が20mmであった。心拍数[回/分]はどれか。',
    options: ['40', '48', '65', '75', '90'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '脳波計測で電位変化の最も小さいのはどれか。',
    options: [
      '睡眠脳波電位',
      '覚醒時脳波電位',
      '聴性脳幹誘発電位',
      '体性感覚誘発電位',
      '視覚誘発電位',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '観血式血圧計の波形ダンピングの原因となるのはどれか。 \na.回路内への気泡混入 \nb.カテーテル先端での血栓形成 \nc.カテーテルの先当り \nd.ゼロ点調整不良 \ne.血圧トランスデューサの設置高さの変更',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '体表面サーモグラフで測定する光の主な波長はどれか。',
    options: ['10nm', '100nm', '1μm', '10μm', '100μm'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '超音波診断装置について正しいのはどれか。 \na.狭窄部位の高血流速度の測定にはパルス波を用いる \nb.心臓弁運動の定量にはMモードを用いる \nc.組織性状の画像化には高調波が有用である \nd.腹部の画像描出にはセクタ走査が適している \ne.Bモード画像描出には連続波を用いる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'ラジオアイソトープ(RI)を用いた医用画像について正しいのはどれか。 \na.α線を測定する \nb.空間分解能は1mm程度である \nc.PETでは腫瘍の存在を検出できる \nd.PETでは糖代謝の画像が得られる \ne.SPECTでは組織繊維化の画像が得られる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  /** 33回(AM) */
  {
    question: '標準12誘導心電図について正しいのはどれか。',
    options: [
      '第Ⅱ誘導は右足と右手間の電位差を記録する誘導である',
      'aVR誘導はWilsonの結合電極を基準とした誘導である',
      'V1～V6の誘導は双極誘導である',
      '標準肢誘導の間にはⅢ=Ⅰ+Ⅱの関係がある',
      '単極肢誘導の間にはaVR+aVL+aVF=0の関係がある',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'トランジットタイム型超音波血流計の特徴で正しいのはどれか \na.伝搬時間を利用する \nb.複数チャネルの同時計測が可能である \nc.ゼロ点補正が必要である \nd.体表面からの測定が可能である \ne.一つの超音波振動子で計測できる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '差圧式呼吸流量計に用いられているのはどれか。 \na.タービン型 \nb.ベネディクト・ロス型 \nc.フライシュ型 \nd.リリー型 \ne.ローリングシール型 ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '血液ガス測定におけるpH電極に用いられる測定法はどれか。',
    options: [
      'ポテンショメトリック法',
      'アンペロメトリック法',
      'ボルタンメトリック法',
      'インピーダンス法',
      'ポーラログラフィ法',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '耳式赤外線体温計について正しいのはどれか。 \na.鼓膜から放射される赤外線を検出している \nb.核心温に近い体温が計測できる \nc.量子型赤外線検出器が用いられている \nd.体温の連続測定に適している \ne.外耳道に炎症があると測定値に影響を与える',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'X線CTについて誤っているのはどれか。 \na.空間分解能は超音波診断装置より高い \nb.臓器のX線に対する吸収係数を画像化している \nc.血管や胃などの管腔臓器の撮影が可能である \nd.深部臓器よりも表在性の臓器の撮影に適している \ne.X 線を単一方向から照射している ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '内視鏡システムについて正しいのはどれか。 \na.挿入部の消毒は不要である \nb.導光用ファイバは炭素繊維製である \nc.観察と同時に治療が可能である \nd.管腔臓器の表在性病変の診断に使用される \ne.撮像にCCDが使用される',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '正しい組合せはどれか。\na.ESWL -------- 音 波 \nb.除細動器 -------- パルス波 \nc.電気メス -------- 高周波 \nd.電気焼灼器 -------- 極超短波 \ne.IABP -------- 超音波',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  /** 33回(PM) */
  {
    question: '物理量と組立単位との組合せで誤っているのはどれか。',
    options: [
      '応 力 -------- N/m2',
      '仕事率 -------- J/s',
      '電 荷 -------- A/s',
      '磁 束 -------- V・s',
      '吸収線量 -------- J/kg',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '生体電気信号増幅器に求められる条件はどれか。 \na.入力インピーダンスが小さい \nb.入力換算雑音が大きい \nc.入力オフセット電圧が小さい \nd.信号対雑音比が大きい \ne.同相除去比が小さい',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '小電力医用テレメータについて誤っているのはどれか。',
    options: [
      '割り当て周波数帯域は420~450MHzである',
      'A型のチャネル間隔は25kHzである',
      '同時に送信する信号の数によって5つの型の送信機がある',
      '割り当て周波数帯域は6バンドで構成されている',
      '混信対策として色ラベルによるゾーン配置が有用である',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '脳磁図計測について正しいのはどれか。 \na.脳磁場検出にはホール素子を用いる \nb.計測には静電シールドルームが必要である \nc.センサの冷却には液体へリウムが必要である \nd.脳磁図の空間分解能は脳波より高い \ne.頭皮に垂直な電流双極子による磁場を検出している',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '非観血式血圧測定法について正しいのはどれか。',
    options: [
      'カフ幅が狭すぎると最高血圧値は下がる',
      'カフの巻き方が緩いと最高血圧値は上がる',
      '脱気速度が速すぎると最高血圧値は上がる',
      '測定場所が心臓より低いと最低血圧値は下がる',
      'カフ幅が広いと平均血圧値は上がる',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '核磁気共鳴画像法について正しいのはどれか。 \na.放射線被曝はない \nb.磁力線の透過性を画像化している \nc.臓器の画像再構成は一断面に限られる \nd.空間分解能は5mm程度である \ne.撮影手法としてT2強調がある',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '核医学検査について正しいのはどれか。 \na.PETで糖代謝に関する情報が画像化できる \nb.体外から放射線を照射することで画像化する \nc.β線を測定して画像化している \nd.SPECTで脳血流に関する情報が画像化できる \ne.PETで3次元画像が得られる',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  /** 34回(AM) */
  {
    question: 'トランスデューサが備えるべき特性でないのはどれか。',
    options: [
      '測定対象に対する選択性が良いこと',
      '測定すべき範囲内で直線性が保たれていること',
      '測定対象のもつ信号の応答速度に対応できること',
      '生体に結合したとき低侵襲であること',
      '信号対雑音比を小さくできること',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '心電図を標準の速さで記録したとき、PQ間隔が5mmの時のPQ時間[s]はどれか。',
    options: ['0.1', '0.15', '0.2', '0.35', '0.4'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '筋電計の構成要素でないのはどれか。',
    options: [
      '加算平均装置',
      '針電極',
      '電気刺激装置',
      '音刺激装置',
      'スピーカ',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心拍出量の計測ができないのはどれか。',
    options: [
      '熱希釈法',
      '色素希釈法',
      '脈波伝搬速度法',
      '超音波断層法',
      '血圧波形解析法',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '経皮的血液ガス分圧測定装置について正しいのはどれか。',
    options: [
      '経皮的に測定したPtcCO2は動脈血のPaCO2よりも低くなる',
      '経皮的に測定したPtcO2は動脈血のPaO2よりも高くなる',
      '計測皮膚面を42〜44℃に加温する',
      '計測には脈波信号が必要である',
      '新生児には使用できない',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '超音波画像計測について正しいのはどれか。 \na.脂肪より肝臓の方が音響インピーダンスが大きい \nb.高い周波数を用いることで深部臓器の観察が可能になる \nc.Aモードでは断層像が得られる \nd.連続波ドプラ計測では血流の速度分布が得られる \ne.造影剤としてマイクロバブルが用いられている',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'ラジオアイソトープを用いた医用画像装置について正しいのはどれか。 \na.X 線 CT に比べ空間分解能が高い \nb.放射性核種から放出されるβ線を検出し画像化している \nc.FDG-PETの撮影では糖代謝情報が得られる \nd.SPECT は脳血流分布を観察できる \ne.PETの撮影には施設内にサイクロトロンの設置が必要である',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  /** 34回(PM) */
  {
    question:
      'SI 単位について正しいのはどれか。 \na. J（ジュール）は基本単位である \nb.dB（デシベル）は補助単位である \nc.V（ボルト）は組立単位である \nd.1 S（ジーメンス）は 1 A/V である \ne.Ω（オーム）は基本単位である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '睡眠脳波計測中に筋電図が混入した。これを除去するために行う処理で正しいのはどれか。',
    options: ['加算平均', '移動平均', '微分演算', '自己相関', 'フーリエ変換'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '心電図記録の交流雑音対策で正しいのはどれか。',
    options: [
      '誘導コード同士は離してばらばらに配置する',
      '心電計の電源コードはベッドと平行に配置する',
      '心電計の弁別比は少なくとも40dB以上を用いる',
      '患者のベッドは病室の壁から離して配置する',
      '心電計の右足コードは保護接地端子に直接接続する',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'オシロメトリック法による血圧測定で正しいのはどれか。',
    options: [
      '最低血圧は測定できない',
      '圧振動の周波数から算出する',
      '不整脈は計測誤差の原因とならない',
      '最高血圧以上では圧振動は検出されない',
      '平均血圧付近で圧振動の振幅が最大となる',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'カプノメータについて正しいのはどれか。 \na. サイドストリーム型では測定に時間的な遅れが生じる \nb.脱酸素化ヘモグロビンの吸光特性を利用する \nc.窒素ガス濃度は誤差の原因となる \nd.ゼロ点校正が不要である \ne.二酸化炭素ガスは4.3nmに光吸収のピークをもつ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '医用サーモグラフについて正しいのはどれか。 \na. 赤外線を照射して体温を計測する \nb.光量子型検出器は赤外線検出器として用いられている \nc.ステファン・ボルツマンの法則から温度を求めている \nd.深部の温度分布がわかる \ne.温度分解能は1℃である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'MRI について正しいのはどれか。 \na. 造影剤を用いなくても血管を描画できる \nb.炭素原子の分布を画像化したものである \nc.画像の輝度値は水を0、空気を-1000とする \nd.X線CTに比べ肺の構造観察に適している \ne.撮影では傾斜磁場を用いて位置情報を得ている',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '内視鏡画像計測について誤っているのはどれか。',
    options: [
      'カプセル内視鏡の光源には LED が用いられる',
      '超音波内視鏡ではセクタ走査が用いられる',
      '狭帯域光観察（NBI）では2つの狭帯域波長光を用いる',
      'カプセル内視鏡は無線回路を内蔵している',
      '電子内視鏡の先端にはイメージセンサが装着されている',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  /** 35回(AM) */
  {
    question: 'トランスデューサと変換する物理量との組合せで正しいのはどれか。',
    options: [
      '差動トランス -------- 温度',
      'CdS -------- 磁場',
      'ホール素子 -------- 放射線',
      'ストレインゲージ -------- 光',
      '圧電素子 -------- 振動',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '生体電気計測用増幅器に差動増幅器を用いる主な目的はどれか。',
    options: [
      '入力インピーダンスを大きくする',
      '生体への電気的安全性を向上させる',
      '入力換算雜音を小さくする',
      '商用交流雑音を除去する',
      '大きな増幅度を得る',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '小電力医用テレメータについて正しいのはどれか。 \na.A型送信機の帯域幅は25kHzである \nb.アンテナシステムとして漏洩同軸ケーブルが用いられる \nc.フェージング防止にダイバーシティーアンテナが用いられる \nd.受信感度向上のためにブースタが用いられる \ne.割り当て周波数バンドは1~5バンドに分類される',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '超音波パルスドプラ血流計で正しいのはどれか。',
    options: [
      '血流方向と同じ向きに超音波ビームを当てたときは測定できない',
      '計測可能な最大血流速度はパルス繰り返し周波数に依存する',
      '超音波の送信と受信を別々の素子で行う必要がある',
      '超音波周波数が高いほど最大計測深度が深くなる',
      '距離分解能を持たない血流計測法である',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '血液ガスの計測について誤っている組合せはどれか。',
    options: [
      'pH -------- ガラス電極',
      '酸素分圧 -------- クラーク電極',
      'ホール素子 -------- セバリングハウス電極',
      '酸素飽和度(SpO2) -------- 赤色光および赤外光の吸光度',
      '経皮的二酸化炭素分圧 -------- 赤外光の吸光度',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'MRIについて誤っているのはどれか。 \na. 炭素原子の空間分布を画像化する \nb.超電導電磁石には液化ヘリウムが用いられる \nc.静磁場強度が高いほど画質は向上する \nd.画像化には傾斜磁場が必要である \ne.石灰化病変の描出に適している',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '内視鏡画像計測について誤っているのはどれか。',
    options: [
      'ファイバスコープ先端には光源が装着されている',
      '電子内視鏡の面順次方式ではRGB回転フィルタを用いる',
      '超音波内視鏡ではラジアル走査が用いられる',
      'カプセル内視鏡にはイメージセンサが内蔵されている',
      '赤外光観察は内腔の粘膜深部を可視化できる',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  /** 35回(PM) */
  {
    question: '信号処理の方法と目的との組合せで正しいのはどれか。',
    options: [
      '微分演算高周波成分の除去',
      '移動平均周波数スペクトルの解析',
      '自己相関関数周期的信号の抽出',
      'ウェーブレット変換エイリアシングの除去',
      'フーリエ変換SN比の改善',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '脳磁計について誤っているのはどれか。',
    options: [
      'ホール素子が用いられる',
      'センサの冷却に液化ヘリウムが用いられる',
      'SQUIDが用いられる',
      '電流ダイポールの位置が推定できる',
      '磁気シールド室が必要である',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '観血式血圧測定で、実際よりも最高血圧が低く、最低血圧が高く表示される原因となるのはどれか。',
    options: [
      'トランスデューサの位置が右心房よりも高い',
      '加圧バッグの内圧が標準よりも高い',
      '血液凝固によってカテーテル内腔が狭窄する',
      'ゼロ点調整が不良である',
      '導管系が共振する',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '差圧方式の呼吸計測装置はどれか。',
    options: [
      'ベネディクトロス型スパイロメータ',
      'フライシュ型ニューモタコグラフ',
      '熱線式流量計',
      '超音波流量計',
      'タービン型流量計',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '家庭用電子体温計について正しいのはどれか。',
    options: [
      '深部体温の計測に適している',
      '婦人用は一般用よりも精度が高い',
      '温度センサにCdSeを用いる',
      '予測式より実測式の方が測定時間が短い',
      'ヒータを内蔵している',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'X線画像計測について正しいのはどれか。',
    options: [
      'CT値は骨のX線吸収係数を基準に算出される',
      'X線CTのスライス厚は50μm程度である',
      'X線CTの空間分解能は5mm程度である',
      '時間差分法は造影剤投与前後の画像を差分している',
      'ヨード系造影剤はX線吸収量が小さい',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'ラジオアイソトープを用いた画像撮影について誤っているのはどれか。',
    options: [
      'X線CTに比べて空間分解能が低い',
      'SPECTは心筋の血流を観察できる',
      'FDG-PETはがん診断に有用である',
      'SPECTは中性子線を検出する',
      'PETは陽電子放出核種を用いる',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  /** 36回(AM) */
  {
    question:
      '誤差率2%の抵抗器の両端電圧を誤差率4%の電圧計で測定した。測定結果から算出した電流値に含まれる最大の誤差（誤差率[%]）に最も近いのはどれか。',
    options: ['2', '3', '4', '6', '8'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '計測機器と用いられるトランスデューサとの組合せで誤っているのはどれか。',
    options: [
      '超音波診断装置 -------- 圧電素子',
      '熱希釈式心拍出量計 -------- サーミスタ',
      'パルスオキシメータ -------- ホール素子',
      'カプノメータ -------- 赤外線検出素子',
      '観血式血圧計 -------- ストレインゲージ',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'パルスオキシメータの測定誤差の要因とならないのはどれか。',
    options: [
      '患者の体動',
      '大気圧の低下',
      '末梢循環不全',
      '異常ヘモグロビン',
      '診断用色素の投与',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '経皮的血液ガス分析について正しいのはどれか。',
    options: [
      '皮下の血流増加のために加温する',
      '計測には脈波信号が必要である',
      '赤外線の吸収を計測している',
      '新生児には使用できない',
      '侵襲的な計測方法である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '超音波画像計測について正しいのはどれか。 \na.生体軟部組織中の音速は約340m/sである \nb.超音波の周波数が高いほど体内での減衰が小さい \nc.超音波は音響インピーダンスが異なる界面で反射する \nd.心室壁の厚さを測定できる \ne.血管内から血管の断面を観察できる',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: 'X線CT撮影について誤っているのはどれか。',
    options: [
      '装置から発生する音はMRIよりも大きい',
      '造影剤を使用して血管を強調する',
      '手術ナビゲーションに用いられる',
      '患者が動くと像が不鮮明になる',
      '放射線防護対策が必要である',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  /** 36回(PM) */
  {
    question:
      '心電図の計測で商用交流雑音対策に用いられるのはどれか。 \na. 移動平均処理 \nb.加算平均処理 \nc.差動増幅器 \nd.ハムフィルタ \ne.ACラインフィルタ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '誘発脳波計測について誤っているのはどれか。',
    options: [
      '脳手術時のモニタリングに利用される',
      '刺激から潜時をもって誘発電位が現れる',
      '刺激に同期して誘発電位の加算平均処理を行う',
      '聴性誘発電位計測にはクリック音が用いられる',
      '安静時脳波よりも誘発脳波の電位変動は大きい',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '熱希釈式肺動脈カテーテルで計測できないのはどれか。',
    options: [
      '混合静脈血酸素飽和度',
      '左室収縮期圧',
      '中心静脈圧',
      '心拍出量',
      '肺動脈圧',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question: '耳用赤外線体温計による体温計測について誤っているのはどれか。',
    options: [
      '鼓膜に赤外線を照射する',
      '検出器にサーモパイルが使用されている',
      '1秒程度で計測できる',
      '挿入する角度により測定値がばらつく',
      '鼓膜温は腋窩温よりも高い',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      'ランベルト・ベールの法則が成立する吸光度測定で正しいのはどれか。 \na. 吸光度は透過率に比例する \nb.吸光度は光路長に反比例する \nc.吸光度は-1～1の範囲の値で表す \nd.モル吸光係数は物質によって異なる \ne.透過光の強度は光路長に対して指数関数的に減少する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '内視鏡画像計測について正しいのはどれか。 \na. ファイバスコープは先端に光源が装着されている \nb.狭帯域光を用いて毛細血管を強調表示できる \nc.カプセル内視鏡は小腸病変の診断に使われる \nd.ファイバスコープは画像が記録できない \ne.電子内視鏡は光源装置が不要である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.bmi],
  },
  {
    question:
      '装置から生体に物理的エネルギーを加えて計測するのはどれか。 \na.超音波診断装置 \nb.X線CT装置 \nc.PET装置 \nd.SPECT装置 \ne.光トポグラフィ装置',
    options: ['a b c', 'a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.bmi],
  },
];
