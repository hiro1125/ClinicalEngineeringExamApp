import { QuizData } from '../../types/type';
import { TAGS_TEXT } from '../contents';

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
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      'ディジタル心電計におけるaVRの計算式はどれか。ただし、I、II、IIIは標準肢誘導を表す。',
    options: ['I-II/2', '-(I+II)/2', 'II-I/2', '(II-III)-I', '3(I+III)/2'],
    answerIndex: 1,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '観血式血圧計の波形がひずむ原因はどれか。\na. ゼロ点調整不良 \nb. 血圧トランスデューサの高さ不良 \nc. カテーテル内での気泡混入 \nd. カテーテル先端での血栓形成 \ne. カテーテル先端での先当り ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
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
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '赤外線を利用した呼吸関連計測装置はどれか。\na. スパイロメータ \nb. ニューモタコメータ \nc. インピーダンスプレスチモグラフ \nd. パルスオキシメータ \ne. カプノメータ ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '体温計測に用いるのはどれか。\na. ホール効果 \nb. マイスナー効果 \nc. ジョセフソン素子 \nd. サーモパイル \ne. サーミスタ ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
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
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
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
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '治療機器のエネルギー作用について正しいのはどれか。\na. エネルギー密度に対する主作用はエネルギーの種類によらない \nb. 主作用は治療余裕度を超えるエネルギー密度で現れる \nc. 治療関値を超えるエネルギー密度で治療効果が現れる \nd. 副作用はエネルギー密度が大きくなると増大する \ne. 不可逆的な樟害は0.1mW/cm2を超えるエネルギー密度で現れる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
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
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '小電力医用テレメータについて誤っているのはどれか。\na. 使用する周波数はUHF帯である \nb. 使用する周波数帯は6バンドである \nc. 送信機の空中線電力は20mW以下である \nd. A型の周波数帯域幅は25kHzである \ne. 混信対策のゾーンは色ラベルで表示する ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
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
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      'トランジツトタイム型超音波血流計の特徴で正しいのはどれか。\na. ゼロ点補正が必要である \nb. 体表面からの測定が可能である \nc. 伝搬速度を利用する \nd. 電気的に非干渉である \ne. 複数チャネルの同時計測が可能である ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '酸素ガスの分析計測手段はどれか。\na. ガルバニックセル \nb. 熱電対 \nc. サーミスタ \nd. セバリングハウス電極 \ne. クラーク電極 ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      'MRIについて正しいのはどれか。\na. 放射線被曝がない \nb. 軟組織の画像化には適さない \nc. 体動に強い \nd. 酸素原子の空間分布を測定する \ne. 血流の情報が得られる ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
  {
    question:
      '核医学における画像測定について正しいのはどれか。\na. PETで糖代謝の撮像が可能である \nb. 体外から放射線を照射することで画像化する \nc. β線が測定の対象である \nd. SPECTで脳の血流量に関する撮像が可能である \ne. PETで3次元画像が得られる ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.biomedicalMeasurementInstrumentation],
  },
];
