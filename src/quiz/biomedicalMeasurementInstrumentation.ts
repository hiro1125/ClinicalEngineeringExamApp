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
];
