import { TAGS_TEXT } from './index';
import { QuizData } from '../../types/type';

export const medicalMechanicalEngineering: QuizData[] = [
  /** 28回(AM) */
  {
    question:
      '応力とひずみについて正しいのはどれか。\na 応力は作用する荷重と断面積の積である \nb ひずみは変形の度合いを比で表したものである \nc 荷重と同一の方向に現れるひずみを縦ひずみという \nd せん断応力によって生じるひずみを横ひずみという \ne 弾性係数は応力とひずみの積である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '内部の直径 20mm のまっすぐな血管内を粘性係数 0.004 Pa・sの血液が平均流速 0.2 m/s で流れている。この流れのレイノルズ数はどれか。ただし、血液の密度は1×103 kg/m3 とする。',
    options: ['1', '20', '500', '1000', '5000'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '25℃の水3Lを 500 W のヒータで加熱して 37℃ にするのに必要なおよその時間[s]はどれか。ただし、ヒータの出力の 80 % が加温に使われ、水の比熱は 4.2 kJ/(kg・ K）とする。',
    options: ['300', '380', '630', '930', '1200'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 28回(PM) */
  {
    question:
      '静止している物体を 10m の高さから落下させたとき、地面に到達するまでのおよその時間 [s]はどれか。',
    options: ['1', '1.4', '2', '2.8', '4.2'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '音波について誤っているのはどれか。',
    options: [
      '超音波は周波数が20kHzよりも高い音波である',
      '超音波は可聴音よりも直進性が高い',
      '音源が観測者に向かって近づいているとき開こえる音は高くなる',
      '伝搬中の疎密波は密の部分で圧力が低下する',
      '超音波診断装置では0.5~MHz程度の周波数が利用されている',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '圧力が一定のもとで、水の温度を 37℃ から 20℃ にしたときの水に溶け込む酸素と二酸化炭素の溶解度の変化について正しいのはどれか。',
    options: [
      '酸素と二酸化炭素の溶解度はどちらも減少する',
      '酸素と二酸化炭素の溶解度はどちらも増加する',
      '酸素の溶解度は増加し、二酸化炭素の溶解度は減少する',
      '酸素の溶解度は減少し、二酸化炭素の溶解度は増加する',
      'どちらの溶解度も変化しない',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 29回(AM) */
  {
    question:
      '鋼の引張り試験を行い、応力-ひずみ線図を作成した。応力-ひずみ線図から求められる材料特性はどれか。\na. 弾性係数 \nb. 粘性係数 \nc. ポアソン比 \nd. 引張り強さ \ne. 降伏応力 ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '流体の分類で誤っている組合せはどれか。',
    options: [
      '圧縮性流体 -------- 空 気',
      '非圧縮性流体 -------- 油',
      '完全流体 -------- 水',
      '粘性流体 -------- グリセリン',
      '粘弾性流体 -------- 血 液',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.cmo],
  },
  {
    question:
      '脈波伝搬速度と正の相関を示すのはどれか。\na 血管壁中のコラーゲン \nb 血管壁中のエラスチン \nc 血液密度 \nd 血管内径 \ne 血管壁厚',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '直線上を一定速度vで移動する振動数fの音源が、静止した観測者に接近し、そのまま同じ速度で遠ざかった。音源の通過前後で観測される音の振動数の差を表す式はどれか。ただし音速をcとする。',
    options: [
      '2v^2/c^2 f',
      'v(2c-v)/c(c-v) f',
      '2cv/(c+v)(c-v) f',
      '2v/c f',
      'v(2c+v)/c(c+v) f',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  /** 29回(PM) */
  {
    question:
      '質量100gの物体が半径30cmの軌道上を1分間に30回転の等速円運動をしている。物体に作用するおよその遠心力[N]はどれか。',
    options: ['0.1', '0.3', '0.5', '0.7', '0.9'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '断面積が1cm2 で長さ10mの棒を1kNの力で引っ張ったとき、棒が0.5mm伸びた。この棒の弾性係数[GPa]はどれか。',
    options: ['1', '2', '3', '4', '5'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '半径rの水平でまっすぐな円管内を粘性率nの液体が流れている。長さL離れた2点間の圧力差がΔPである場合、管内の流量Qを示す式はどれか。ただし、管内の流れは層流である。',
    options: [
      'πr^2μΔP/8L',
      'πr^3ΔP/8μL',
      'πr^3μΔP/8L',
      'πr^4ΔP/8μL',
      'πr^4μΔP/8L',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      'ベッド上の患者の中心静脈圧を、ベッドとは別の専用台に取り付けてあるマノメータで測定した値が10cmH2Oであった。ベッドを10cm高くしたときマノメータの表示値[cmH2O]はどれか。',
    options: ['-20', '-10', '0', '10', '20'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '線膨張係数が1.2×10-5K-1で長さ2.0mの鉄の棒の温度を10℃増加させたとき、この鉄の棒の伸び[μm]はどれか。',
    options: ['2.4', '12', '60', '240', '600'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  /** 30回(AM) */
  {
    question:
      '断面積 4mm2、長さ 2m 、ヤング率 100 GPa の銅線の下端に質量 100 kg の物体をぶら下げた。銅線のおよその伸び [mm] はどれか。',
    options: ['0.2', '0.5', '2', '5', '20'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '100mmHgの圧力が1.00cm2の面に加えられたとき、この面に加わるおよその荷重[N]はどれか。',
    options: ['33', '72', '7.6', '13.6', '133'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '誤っているのはどれか。',
    options: [
      '血管壁中のエラスチンの割合が増加すると脈波伝搬速度が速くなる',
      '安静立位状態では平均動脈圧は測定部位に関わらず同じである',
      'ヘマトクリット値が上昇すると血液の粘性が増加する',
      '血管内径が小さくなると血管抵抗は上昇する',
      '末梢血管抵抗が同じであれば心拍出量が増加すると平均血圧は上昇する',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  /** 30回(PM) */
  {
    question:
      '質量100 g の鋼球を水平面から60°の角度で斜め上方に10m/s の速度で発射した。発射1.0秒後の鋼球の水平方向速度[m/s] はどれか。ただし、空気抵抗は無視できるものとする。',
    options: ['0', '1.1', '5', '8.7', '10'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '長さ600mm、直径40mm の丸棒の長さ方向に荷重を加えたところ、長さが30μm 増加し、直径が0.76μm 減少した。この材料のポアソン比はどれか。',
    options: ['0.0017', '0.025', '0.067', '0.14', '0.38'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '波動において角振動数をω, 振動数をf、速度をv 、波長をλとするとき周期はどれか。',
    options: ['2πf', '1/f', 'λ/f', 'λω', 'fv'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '体積30Lの容器内に理想気体が圧力100kPa、温度27℃ で入っている。気体の温度を127℃まで上げて体積を40Lにしたとき容器内の圧力 [kPa] はどれか。',
    options: ['0', '10', '35', '100', '350'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  /** 31回(AM) */
  {
    question:
      '質量20gの鋼球を水平面から真上方向に15m/sの速度で発射した。鋼球が再び水平面に落ちるまでのおよその時間[s]はどれか。ただし、空気抵抗は無視できるものとする。',
    options: ['3.1', '5.2', '7.3', '9.4', '10'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '正しいのはどれか。\na 毛細血管の分岐部では渦が発生しやすい \nb 大動脈では動圧の値と静圧の値はほぼ等しい \nc 血管に石灰化が起こると脈波伝搬速度は増加する \nd ヘマトクリット値が上昇すると血液粘度が増加する \ne 動脈血圧のピーク値は体の部位によって異なる',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  /** 31回(PM) */
  {
    question:
      'バネ定数400N/mのバネに質量1kgのおもりを吊るし単振動させた。およその周期[s]はどれか。',
    options: ['0.03', '0.05', '0.3', '0.5', '3'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '観測者が静止音源に一定速度で近づき遠ざかる際、音源を通過する前後で観測される音の振動数が10%低下した。観測者のおよその速度はどれか。ただし、音速を c とする。',
    options: ['0.01c', '0.05c', '0.1c', '0.2c', '0.3c'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 32回(AM) */
  {
    question: '材料の機械的特性について誤っているのはどれか。',
    options: [
      '応力は単位面積あたりに働く力(荷重)である',
      '応力と圧力の単位は同じである',
      'ひずみは単位面積あたりの変形量である',
      'ヤング率は応力とひずみの比である',
      'ポアソン比は荷重方向とそれに垂直な方向のひずみの比である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '長さ1.2m、断面積4.0mm2の線材を8.0Nの力で引っ張ったところ長さが1.2mm増加した。この線材の縦弾性係数[GPa]はどれか。',
    options: ['2', '5', '20', '50', '200'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '血管を流れている血液の粘性率が増加するのはどれか。\na 体温の上昇 \nb 血流のせん断速度の増加 \nc ヘマトクリット値の上昇 \nd 連銭形成(ルーロ形成) \ne 集軸効果',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '同じ質量で20℃の物体を37℃まで加熱するために必要な熱エネルギーが最も大きいのはどれか。',
    options: ['水', 'タンパク質', '脂 質', 'リン酸カルシウム', 'ステンレス'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  /** 32回(PM) */
  {
    question:
      'ベクトル量はどれか。\na 質 量 \nb 時 間 \nc 加速度 \nd 運動量 \ne 仕事量',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '速度に比例する抵抗力を発揮する機械要素(ダンパ)がある。比例定数であるダンパ定数の次元はどれか。',
    options: ['kg・s-2', 'kg・s-1', 'kg・m・s-2', 'kg・m・s-1', 'kg・s'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '流速1m/sの血流に生じる動圧[mmHg]のおよその値はどれか。',
    options: ['0.4', '1', '4', '10', '40'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '血管内のレイノルズ数が最も大きいのはどれか。',
    options: ['総頚動脈', '上行大動脈', '橈骨動脈', '大腿動脈', '毛細血管'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '20℃、100 g の水を1分間加熱して30℃とするために必要な仕事率[W]はどれか。ただし、水の比熱は4.2J/(g･℃)とする。',
    options: ['7', '42', '70', '420', '700'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '正しいのはどれか。',
    options: [
      '粘性流体のずり速度のSI単位はm/sである',
      '生体軟組織のポアソン比はおよそ1.0である',
      '縦弾性率を表すヤング率の単位はPaである',
      '腱より筋のヤング率は大きい',
      '動脈血管の円周方向の最大変形は20%程度である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  /** 33回(AM) */
  {
    question:
      '塑性変形について正しいのはどれか。\na 外力を取り除くと形状が完全に元に戻る \nb 永久ひずみが生じる \nc 降伏現象により生じる \nd ヤング率により変形が評価できる \ne バネのみを用いてモデル化できる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '流れにおけるベルヌーイの定理について正しいのはどれか。\na 粘性流体に適用される \nb 力学的エネルギーが保存される \nc ひとつの流線上で成立する \nd 重力とは無関係である \ne レイノルズ数を導くことができる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      'ドプラ効果について誤っているのはどれか。\na 観測者と音源の相対運動で生じる \nb 音源が観測者に接近すると音が高く聞こえる \nc 光においても認められる \nd 山びこはドプラ効果である \ne 音波の振幅に関する現象である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '注射器に12mLの空気を入れ、先端を閉じてピストンを押して、注射器内の圧力を150mmHgに上昇させた。このとき注射器内の空気のおよその体積[mL]はどれか。ただし、大気圧を760mmHgとし、空気の温度変化はないものとする。',
    options: ['11', '10', '9', '8', '6'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 33回(PM) */
  {
    question: 'スカラー量はどれか。',
    options: ['力', '変 位', '加速度', '運動量', '質 量'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '半径 R、長さ L の円管内を粘性率 n の液体が流量 Q で流れている。流れが定常な層流のとき、管の上流と下流の圧力差はどれか。',
    options: [
      'πR^2Q/8μL',
      'πR^3Q/8μL',
      '8μLQ/πR^4',
      '128μLQ/πR^3',
      '128μLQ/πR^4',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '正しいのはどれか。\na 血管壁中のエラスチンの割合は脈波伝搬速度と正の相関を示す \nb 細い血管では血球が血管壁部に集まる \nc 動脈血圧のピーク値は体の部位によって異なる \nd ヘマトクリット値が上昇すると血液の粘性が増加する \ne 血管内径が小さくなると血管抵抗は上昇する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '値が小さくなると脈波の伝搬速度が増加するのはどれか。',
    options: [
      '心拍数',
      '平均動脈圧',
      '血管の内径',
      '血管壁の厚さ',
      '血管のヤング率（周方向）',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  /** 34回(AM) */
  {
    question: '力[N]をSI基本単位で表したのはどれか。',
    options: ['kg', 'kg/m2', 'kg/m3', 'kg・m/s2', 'kg・m/s3'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '円管の中を粘性流体が層流で流れている。同じレイノルズ数になるのはどれか。\na 平均流速 0.5倍、円管の長さ 2倍 \nb 粘性率 2倍、円管の長さ 0.5倍 \nc 平均流速 2倍、円管の内径 2倍 \nd 平均流速 0.25倍、円管の内径 4倍 \ne 粘性率 2倍、円管の内径 2倍',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '正しいのはどれか。\na 動脈血圧のピーク値は体の部位によって異なる \nb 血管内径が小さくなると血管抵抗は上昇する \nc 血管に石灰化が起こると脈波伝搬速度は増加する \nd 大動脈では動圧の値と静圧の値はほぼ等しい \ne 動脈径が大きいほど脈波伝搬速度は増加する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '20℃で体積1000Lの物体を75℃まで温める。この物体の体膨張係数が0.0036 K-1 であるとき、温まった物体の体積[L]に一番近いのはどれか。 ただし、圧力は一定とする。',
    options: ['200', '270', '1200', '1270', '1340'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  /** 34回(PM) */
  {
    question:
      '質量 50kgの物体が秒速 10mで動いている。この物体に一定の大きさの制動力を加え続けると25m移動したところで停止した。制動力の大きさ[N]はどれか。 ただし、制動力以外に運動を妨げる効果は無視できるものとする。',
    options: ['1', '2', '20', '100', '200'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      'ベルヌーイの定理に含まれるパラメータ（物理変数）はどれか。\na 流 速 \nb 静 圧 \nc 高 さ \nd 温 度 \ne 粘性率',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '可聴音におけるドプラ効果において、観測される音の周波数変化に影響しない因子はどれか。',
    options: [
      '音波の振幅',
      '風 速',
      '音源と観測者の速度ベクトルのなす角度',
      '音源の速さ',
      '観測者の速さ',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '変形しない容器に空気を密封し 27℃から 57℃に加熱したときの圧力の変化はどれか。',
    options: ['0.9倍', '1.1倍', '1.5倍', '1.8倍', '2.1倍'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 35回(AM) */
  {
    question:
      '材料のヤング率を求めるために材料に加える負荷はどれか。\na 圧縮荷重 \nb 引張り荷重 \nc せん断荷重 \nd 曲げモーメント \ne ねじりモーメント',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '完全流体では成立せず、粘性流体のみで成立するのはどれか。\na 流れの相似性(レイノルズ数による比較) \nb パスカルの原理 \nc 連続の式 \nd ベルヌーイの定理 \ne ハーゲン・ポアズイユの法則',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '正しいのはどれか。\na 毛細血管内を通過する際、赤血球は変形する \nb 血管内膜のコラーゲンが増加すると脈波伝搬速度が速くなる \nc 大動脈における動圧の値は静圧よりも大きい \nd 細動脈では血球が血管壁部に集まる \ne 安靜立位状態では平均動脈圧は測定部位に関わらず同じである',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '40°Cの水1kgに10°Cの水2kgを加えたときの水の温度はどれか。',
    options: ['15°C', '20°C', '25°C', '30°C', '35°C'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 35回(PM) */
  {
    question:
      '等速円運動をしている物体がある。質量を0.5倍、角速度を2倍、回転半径を0.5倍としたとき、向心力の大きさは何倍になるか。',
    options: ['0.25', '0.5', '1', '2', '4'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '1000Hzの静止音源に観測者が接近したとき、聞こえる音の振動数が1060Hzであった。観測者の速度[m/s]に最も近いのはどれか。ただし、音速は340m/sとする。',
    options: ['10', '15', '20', '25', '30'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '放射について誤っているのはどれか。',
    options: [
      '真空中でも放射により熱が伝わる',
      '水中でも放射により熱が伝わる',
      '0°Cの物体からも放射により周囲に熱が伝わる',
      '37°Cの物体からは主に紫外線が放射される',
      '物体の絶対温度の4乗に比例したエネルギーが放射される',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '正しいのはどれか。\na ポアソン比は「縦ひずみ/横ひずみ」である \nb 摩擦係数の単位はm/sである \nc せん断ひずみとせん断応力は等しい \nd 骨のヤング率は筋肉より大きい \ne 粘性率の単位はPa・sである',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  /** 36回(AM) */
  {
    question:
      '物体を水平面から60°の角度で斜め上方に初速30m/sで射出した。最高点に達したときの速さ[m/s]はどれか。ただし、空気抵抗は無視できるものとする。',
    options: ['0', '15', '15√2', '15√3', '30'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '内直径10mmの円管の中を動粘度4×10-6m2/sの流体が速度1m/sで流れているときのレイノルズ数はどれか。ただし、動粘度は、粘度/密度である。',
    options: ['40', '250', '400', '2500', '4000'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '循環器系の流体現象について誤っているのはどれか。',
    options: [
      '血管に石灰化が起こると脈波伝搬速度が増加する',
      '連銭（ルーロー）の形成により血液粘度が増加する',
      '動脈血圧のピーク値は体の部位によって異なる',
      '血管内径が小さくなると血管抵抗が上昇する',
      '大動脈の動圧は静圧より大きい',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '音の3要素はどれか。\na. 高さ \nb. 強さ \nc. 音色 \nd. 速さ \ne. 方向 ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  /** 36回(PM) */
  {
    question:
      'バネ定数400N/mのバネにおもりを吊るし単振動させたところ、周期は0.3sであった。おもりのおよその質量[kg]はどれか。ただし、空気抵抗は無視できるものとする。',
    options: ['0.1', '0.5', '1', '5', '10'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '水の表面張力について誤っているのはどれか。',
    options: [
      '単位はN/mである',
      '毛管現象の要因である',
      '分子の凝集力によって生じる',
      '温度が高くなると小さくなる',
      '液滴の表面積を大きくするように働く',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '流れにおけるベルヌーイの定理を表す式について正しいのはどれか。\na 完全流体に適用される \nb 重力とは無関係である \nc 温度をパラメータとして含む \nd 連続の式を導くことができる \ne 力学的エネルギー保存則が適用される',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '値が上昇すると血液の粘性率が低下するのはどれか。\na 温度 \nb 電解質濃度 \nc タンパク質濃度 \nd ヘマトクリット値 \ne 血流のせん断速度',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  /** 問題数が足りなかっため追加 */
  {
    question: '1 MHzの超音波が水中を進行するときのおよその波長[mm]はどれか。',
    options: ['150', '15', '1.5', '0.15', '0.015'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '誤っているのはどれか。',
    options: [
      'ヘマトクリット値が上昇すると血液の粘度が増加する',
      '毛細血管内を通過する赤血球は変形する',
      '脈波伝搬速度は最高血圧で変化する',
      '体動脈圧の最高値は末梢に行くにしたがって単調に低下する',
      'コロトコフ音は血圧測定に用いられる',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '粘性率4×10^-3Pa・Sの流体が内径3mmの直円管内を平均速度12 cm/Sで流れている。粘性率1×10^-3Pa･Sの流体を内径9mmの直円管内に流したときに、相似(レイノルズ数が同じ)になる平均速度[cm/S]はどれか。ただし、流体の密度はすべて等しいとする。',
    options: ['0.25', '1', '9', '16', '144'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      'フックの法則について正しいのはどれか。\na 塑性変形に対して成立する \nb 応力はひずみに比例する \nc 線形弾性変形に対して成立する \nd 材料の体積が変わらないことを表す \ne 材料の粘性を表す',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      'バネを鉛直に保ち、下端におもりを取付け、上端を一定振幅で上下に振動させる。周波数を徐々に変化させたとき、正しいのはどれか。',
    options: [
      '周囲に抵抗がない場合、おもりの振幅は周波数によらず上端の振幅と等しい',
      '周囲に抵抗がない場合、上端の振幅とおもりの振幅の比は周波数によらず一定である',
      '周囲に抵抗がある場合、おもりの振動の周波数は上端の周波数よりも低い',
      '周囲に抵抗がある場合、加速度が一定になる周波数がある',
      '周囲に抵抗がある場合、ある周波数でおもりの振幅が最大になる',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '応力とひずみについて正しいのはどれか。\na 応力は作用する荷重と断面積の積である \nb ひずみは変形の度合いを比で表したものである \nc 荷重と同一の方向に現れるひずみを縦ひずみという \nd せん断応力によって生じるひずみを横ひずみという \ne 弾性係数は応力とひずみの積である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '直円管内の流れについて正しいのはどれか。',
    options: [
      'ハーゲン・ポアゼイユの式は流れが遅いと成立しない',
      '乱流は層流に比べて撹拌が盛んである',
      '流れが遅いと乱流になりやすい',
      '流体の粘性率が低い方が層流になりやすい',
      '連続の式は乱流では成立しない',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '音速の1 /25 の速度で移動している観測者を、その後方から音源が音速の1/5の速度で追いかけるとき、観測者が聞く音の振動数は音源の出す音の振動数の何倍か。',
    options: ['1/5', '5/6', '6/5', '6', '125'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '長さ1m、断面積2×10-6m2、ヤング率50MPaのシリコーンゴム製ロープに1kgの重りをぶら下げた。ロープのおよその伸び[mm]はどれか。ただし、重力加速度は9.8 m/s2とする。',
    options: ['0.1', '1', '10', '100', '1000'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '水タンクをある高さに固定して内半径rのチューブを接続したところ、流量Qで流れた。同じ長さで内半径2rのチューブを接続した場合の流量はQの何倍か。ただし、流れは層流であるとする。',
    options: ['1/16', '1/4', '1', '4', '16'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '血圧と血液について正しいのはどれか。\na 安静立位状態では平均動脈圧は測定部位にかかわらず同じである \nb 動脈血圧のピーク値は体の部位によって異なる \nc 脈波伝搬速度は血管壁が硬いほど大きい \nd 四肢の静脈の血流は定常流である \ne 収縮期血圧は一心拍中で動脈の直径が最小になった時の血圧である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '質量100gの物体を5秒間で2m上方に持ち上げたときのおよその仕事率[W]はどれか。ただし、重力加速度は9.8 m/s2とする。',
    options: ['0.004', '0.04', '0.4', '0', '40'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: 'クリープ現象はどれか。',
    options: [
      '身長は朝から夕方にかけて徐々に低くなる',
      '暗闇に入ってしばらくするとものが見えるようになる',
      '細動脈内を血液が流れるとき赤血球が管軸付近に集中する',
      '膝蓋腱を叩くと足が上がる',
      '脈圧は末梢の方が高い',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '流速10 m/sで鉛直上方に吹き上がる噴水のおよその到達高さ[m]はどれか。ただし、重力加速度は9.8 m/s2とする。',
    options: ['1', '2', '5', '10', '20'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '音の性質について誤っているのはどれか。',
    options: [
      '振動によってエネルギーが伝わる',
      '音圧が高いほど音量が大きい',
      '音が伝わるためには振動による媒質のひずみが必要である',
      '音波は疎密波である',
      '音波の伝搬速度は媒質の体積で決まる',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '環境と熱伝達メカニズムとの組合せで誤っているのはどれか。',
    options: [
      '重力下・空気中 -------- 対 流',
      '重力下・真空中 -------- 放 射',
      '無重力・空気中 -------- 対 流',
      '無重力・真空中 -------- 放 射',
      '無重力・固体内部 -------- 伝 導',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.cmo],
  },
  {
    question: '臨界レイノルズ数に最も近いのはどれか。',
    options: ['25', '100', '500', '2500', '100000'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '熱の移動について正しいのはどれか。\na. 熱は真空中を放射によって伝わる \nb. 空気は水よりも熱伝導率が大きい \nc. 液体中では対流による熱の移動はない \nd. 血液は体内で熱を移動させる \ne. 脂肪組織は筋組織よりも断熱効果が大きい ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '波動について正しいのはどれか。\na 二つの波動が重なると波動の散乱が起こる \nb 縦波と横波の伝搬速度は同じである \nc 波動の伝搬速度を v、振動数をf、波長をλとするとv=λfである \nd 波動の干渉によって周期的な腹と節を有する定常波が生じる \ne 弾性体の棒の中を伝わる縦波の伝搬速度はヤング率の平方根に反比例する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '100mmHgをSI単位で表す場合、最も近いのはどれか',
    options: ['7.52Pa', '13.3Pa', '7.52kPa', '13.3kPa', '7.52MPa'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '誤っているのはどれか。',
    options: [
      '物体に力を加えたときに生じるモーメントには曲げとねじりがある',
      '力を取り除くとひずみがゼロに戻る変形を塑性変形という',
      '降伏応力が高いほど材料としての強度は高い',
      'ポアソン比は縦ひずみと横ひずみの関係を表す',
      '力を加えた方向と平行な面に発生する応力をせん断応力という',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '質量mの物体が半径r、周速度vで等速円運動しているときの向心力はどれか。',
    options: ['mrv', 'mrv^2', 'mr^2v^2', 'm v/r', 'm v^2/r'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '円管内の定常な層流において、管の内径を元の50%にしたとき抵抗は何倍になるか。',
    options: ['2', '4', '8', '16', '32'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '2kNの引張荷重を受ける軟鋼丸棒を安全に使用するために必要な断面積[mm2]はどれか。ただし、軟鋼の引張強さは400MPa、安全率は5とする。',
    options: ['5', '25', '50', '250', '500'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '20℃、100gの水を1分間加熱して30℃とするために必要な仕事率[W]はどれか。ただし、水の比熱は4.2J/(g･℃)とする。',
    options: ['7', '42', '70', '420', '700'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: 'ドップラー効果について誤っているのはどれか。',
    options: [
      '音源と観測者との相対運動によって生じる',
      '音源が接近する場合には音が高く聞こえる',
      '山びこはドップラー効果である',
      '光においても認められる',
      '周波数に関する現象である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '熱の移動について正しいのはどれか。\na 伝導の大きさは物質によって異なる \nb 真空中に置かれた物体内では伝導は起こらない \nc 空気の対流は無重力状態でも起こる \nd 黒いものがよく暖まるのは対流による \ne 太陽光線に当たると暖かく感じるのは放射による',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '質量mの物体が初速度0で落下するとき、時間t後の落下距離はどれか。ただし、重力加速度はg、空気抵抗は無視する。',
    options: ['mg', 'gt', '1/2 gt^2', 'gt^2', '√gt'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '血管の脈波伝搬速度で正しいのはどれか。\na. 弾性係数 \nb. 粘性係数 \nc. ポアソン比 \nd. 引張り強さ \ne. 降伏応力 ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '120mmHgの血圧はおよそ何kPaか。',
    options: ['0.16', '1.6', '16', '160', '1600'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '血管の脈波伝搬速度で正しいのはどれか。\na. 血管壁が硬いほど速くなる \nb. 血圧が高いほど速くなる \nc. 血管が太いほど速くなる \nd. 血管壁が薄いほど速くなる \ne. 血液の密度が高いほど遅くなる ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '断面積Aの材料に張カPを加えて引っ張った。正しいのはどれか。',
    options: [
      '荷重方向と直交する方向に変形する割合をせん断ひずみという',
      '材料はポアソン比分だけ荷重方向に伸びる',
      '材料に発生する応力はP/Aである',
      'ポアソン数は発生したひずみにポアソン比を乗じた値である',
      '発生したひずみを張力Pで割った値を弾性係数という',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mme],
  },
  {
    question:
      '質量mの物体が初速度0で落下するとき、時間t後の速度で正しいのはどれか。ただし、重力加速度はgとする。',
    options: ['gt', '1/2 gt', '1/2 gt^2', 'mg', 'mgt'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mme],
  },
  {
    question: '音のエネルギー変化で20 dB に相当する倍率はどれか。',
    options: ['2倍', '10倍', '20倍', '100倍', '200倍'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mme],
  },
];
