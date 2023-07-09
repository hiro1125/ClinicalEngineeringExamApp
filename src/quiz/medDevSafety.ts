import { TAGS_TEXT } from '.';
import { QuizData } from '../../types/type';

export const medDevSafety: QuizData[] = [
  /** 28回(AM) */
  {
    question:
      '事故とその原因との組合せで考えにくいのはどれか。\na.火災 -------- 電源導線の絶縁被覆の劣化 \nb.感染 -------- 手術室内の空調の故障 \nc.感電 -------- 医用電気機器内への薬液の浸入 \nd.停電 -------- 医用3Pプラグの保護接地刃の折損 \ne.被曝 -------- MRI装置の超電導磁石の故障',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '機器の分類について正しいのはどれか。\na. 患者装着部のF (floating) は患者への外部電圧の印加に対する防護手段である \nb. クラスIのME機器を内蔵バッテリーで駆動すると内部電源ME機器となる \nc. BF形装着部はミクロショック対策がされている \nd. クラスEのME機器の追加保護手段は基礎絶縁である \ne. 内部電源ME機器は保護接地が必要である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 1022でカテゴリーBの透析室に設けなければならない電気設備はどれか。\na. 一般または特別非常電源 \nb. 瞬時特別非常電源 \nc. 等電位接地 \nd. 非接地配線方式 \ne. 保護接地',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ある機器を信頼度0.70のAさんが点検した後に、ダブルチェックのため別のBさんが確認した。点検作業の総合的な信頼度が0.97であった。Bさんの信頼度はどれか。',
    options: ['0.49', '0.68', '0.72', '0.9', '0.99'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ISM (Industrial Scientific and Medical) 周波数帯のエネルギーを使用しているのはどれか。',
    options: [
      '超音波吸引装置',
      '除細動器',
      'レーザ治療装置',
      'マイクロ波手術器',
      '心電図テレメータ',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  /** 28回(PM) */
  {
    question:
      '100 kHz の交流電流を成人男性に1秒間通電したときの感知電流の閾値 [mA] に近いのはどれか。',
    options: ['0.01', '0.1', '1', '10', '100'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '成人に影響を及ぼす値で誤っているのはどれか。\na. ミクロショックで心室細動を生じる商用交流電流 : 10μA \nb. マクロショックで心室細動を生じる商用交流電流 : 200mA \nc. 手で触れて感じる最小商用交流電流 : 1mA \nd. 電線を握った手を自分で離脱できる商用交流電流 : 5mA \ne. 電撃閾値が変化し始める周波数 : 10kHz',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '漏れ電流の単一故障状態として規定されているのはどれか。\na. 3P プラグの接地ピンの折損 \nb. 電源ヒューズの1本の断線 \nc. 電源導線と金属僅体の接触 \nd. 追加保護接地線の断線 \ne. 二重絶縁の一方の短絡',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療ガスと医療ガス配管端末器の識別色との組合せで正しいのはどれか。',
    options: [
      '酸素 -------- 黒',
      '亜酸化窒素 -------- 灰',
      '治療用空気 -------- 緑',
      '駆動用空気 -------- マゼンタ',
      '二酸化炭素 -------- だいだい',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '医療ガス配管設備について正しいのはどれか。',
    options: [
      '静止状態での標準送気圧力は酸素よりも治療用空気の方が高い',
      'シャットオフバルブは日常「閉」の状態で使用される',
      '駆動用空気配管には「VAC」と識別表示されている',
      '三酸化炭素の配管端末器にはAGSSカブラが用いられる',
      'マニフォールドとは高圧ガス容器の集合体である',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医用電気機器が他からの電磁的な妨害に耐える能力を示すのはどれか。',
    options: ['EMC', 'EMI', 'ESD', 'immunity', 'emission'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  /** 29回(AM) */
  {
    question:
      '臨床工学技士の業務で医師の具体的な指示が必要なのはどれか。\na. 人工呼吸装置の回路の組み立て \nb. 動脈留置カテーテルからの採血 \nc. 血液浄化装置の運転条件の変更 \nd. 人工呼吸装置の運転条件の設定 \ne. 高気圧酸素治療装置の消毒',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1:2012 において、B 形装着部とCF 形装着部の許容値（交流）が同じなのはどれか。\na. 患者接続部から大地への患者漏れ電流 \nb. 接地漏れ電流 \nc. 接触電流 \nd. 患者測定電流 \ne. 信号入出力部へ外部電圧を印加した場合の患者漏れ電流',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1:2012 で規定されている単一故障状態はどれか。\na. 保護接地線の開路 \nb. 絶縁のいずれかひとつの短絡 \nc. 電源導線のいずれか1本の断線 \nd. F形装着部への外部電圧印加 \ne. 信号入出力部への外部電圧印加',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '医療ガスについて誤っているのはどれか。',
    options: [
      '合成空気の成分は酸素と窒素である',
      '医療ガス配管設備には吸引も含まれる',
      'ボンベ内の亜酸化窒素の残量はボンベ内圧から求める',
      '酸素の比重は空気より大きい',
      '窒素は外科用手術機器の動力源として用いられる',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '植込み型心臓ペースメーカに影響を及ぼすのはどれか。\na. EAS機器 \nb. RFID読取り機器 \nc. PHS端末 \nd. 無線LAN機器 \ne. 電磁調理器',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  /** 29回(PM) */
  {
    question:
      '1秒間の通電によって成人に影響を及ぼす商用交流電流の値で考えられないのはどれか。',
    options: [
      '電流による熱傷が起きる -------- 10A',
      'マクロショックで心室細動が生じる -------- 200mA',
      '筋肉の不随意運動が生じる -------- 30mA',
      '手で触れてビリビリと感じる -------- 2mA',
      'ミクロショックで心室細動が生じる -------- 10μA',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ME機器の分類について正しいのはどれか。\na. クラスIのME機器の追加保護手段は保護接地である \nb. B形装着部は外部電圧の印加に対して保護されていない \nc. 内部電源ME機器の追加保護手段は基礎絶縁である \nd. CF形装着部は接地されている \ne. クラスIIのME機器は在宅使用に適している',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1:2012 で規定する保護接地線インピーダンス測定方法について誤っているのはどれか。',
    options: [
      '無負荷時の試験用電圧は6V以下を用いる',
      '試験用電源の周波数は50Hzまたは60Hzを用いる',
      '試験用電流は15Aを用いる',
      '保護接地線に最大電流を5〜10秒間流す',
      '電圧降下法によりインピーダンスを算出する',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療ガス配管端末器で静止状態の送気圧力が、下記のうち2番目に高いのはどれか。',
    options: ['酸 素', '亜酸化窒素', '治療用空気', '二酸化炭素', '駆動用窒素'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '機器Aは10回に1回は使用できない。機器Bは5回に1回は使用できない。機器A と機器B を同時に使用した場合に、少なくともどちらか一方によって使用目的が達成できるとすると、目的が達成できる確率はどれか。',
    options: ['0.72', '0.8', '0.9', '0.98', '0.99'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療法で臨床工学技士のほかに「医療機器安全管理責任者」として配置できる職種はどれか。\na. 救急救命士 \nb. 薬剤師 \nc. 診療放射線技師 \nd. 看護師 \ne. 理学療法士',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  /** 30回(AM) */
  {
    question:
      '300kHzの交流電流を1秒間通電したときの感知電流の閾値[mA]に近いのはどれか。',
    options: ['30', '100', '150', '300', '500'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: 'JISで規定されていないのはどれか。',
    options: [
      '輸液ポンプ',
      '電気メス',
      '植込み型心臓ペースメーカ',
      '心電計',
      '観血式血圧計',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '保守点検に含まれないのはどれか。',
    options: [
      '体外式除細動器の外装の清掃',
      '人工呼吸器のパクテリアフィルタの交換',
      '人工透析装置の劣化した医用プラグの交換',
      '輸液ポンプの送液流量精度の測定',
      '心電計の記録器の校正',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '正しいのはどれか。\na. 2.4GHzの電磁波は非電離放射線である \nb. 携帯電話で使用される周波数は約500kHzである \nc. 小電力医用テレメータは出力が規定値以内であれば任意の周波数を用いてよい \nd. 心電計に電磁障害が起きると患者測定電流が増加する \ne. 電気メス使用時は心臓ペースメーカを固定レートにする',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  /** 30回(PM) */
  {
    question:
      'ヒヤリハット（インシデントレベル2 以下）に該当するのはどれか。\na. 感染症患者に使用した注射針で医療従事者が負傷して感染症を発症した \nb. 人工呼吸器の加温加湿器の電源を入れ忘れて患者が気道閉塞を起こした \nc. 輸液ポンプの設定間違いで薬液が過剰投与されたが患者に影響はなかった \nd. AEDの使用で患者の蘇生後にパッドの使用期限切れに気づいた \ne. 血液透析治療を終えた直後の患者が廊下で転倒して骨折した',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '事故とその原因との組合せとして考えられるのはどれか。\na.感電 -------- ME機器の電源ヒューズの断線 \nb.被曝 -------- X線CT装置への電源供給停止 \nc.感染 -------- ディスポーザプル製品の再使用 \nd.発火 -------- 高圧酸素ボンベの急激なバルプ開放 \ne.熱傷 -------- アルコール消毒直後の電気メスの使用',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1:2014 において、患者装着部の分類によって許容値が変わらないのはどれか。\na. 患者接続部から大地への漏れ電流 \nb. SIP/SOP へ外部電圧を印加した場合の電流 \nc. 接触電流 \nd. 接地漏れ電流 \ne. 患者測定電流',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '病院電気設備の安全基準(JIS T 1022 : 2006) で規定されるカテゴリー B（電極などを使用するが、心臓には適用しない医用室）に設けなければならないのはどれか。\na. 保護接地 \nb. 非接地配線方式 \nc. 等電位接地 \nd. 瞬時特別非常電源 \ne. 一般/特別非常電源',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 7101 : 2014 で規定されている医療ガス配管設備について正しいのはどれか。',
    options: [
      '吸引圧力はマニフォールドから供給される',
      '手術機器駆動用空気配管は「VAC」と表示される',
      '麻酔ガス排除用配管端末器はシュレーダ方式が用いられる',
      '酸素の標準送気圧力は配管端末器で4MPa 程度である',
      '治療用空気配管端末器における最大流量の下限は60L/minである',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ME機器のEMC規格である JIS T 0601-1-2 : 2012 におけるイミュニティ試験の項目でないのはどれか。',
    options: [
      '静電気放電',
      '放射RF電磁界',
      '電気的ファーストトランジェント',
      '電圧ディップ',
      '静磁界',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療法で定める「医療機器安全管理責任者」に任命できる職種はどれか。\na. 薬剤師 \nb. 助産師 \nc. 視能訓練士 \nd. 理学療法士 \ne. 歯科衛生士',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  /** 31回(AM) */
  {
    question: '臨床工学技士の業務に含まれないのはどれか。',
    options: [
      '動脈留置カテーテルからの採血',
      '人工呼吸器の運転条件の設定',
      '人工呼吸中の気管吸引による喀痰除去',
      '血液浄化装置の先端部の内シャントヘの穿刺',
      'ペースメーカ植込み時のジェネレータと電極リードの接続',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '医療ガスの性質について誤っているのはどれか。',
    options: [
      '酸素ガスの比重(対空気)は約1.5である',
      '亜酸化窒素ガスには支燃性がある',
      '窒素ガスの沸点は約-196°Cである',
      '二酸化炭素ガスの臨界温度は約31°Cである',
      'ヘリウムガス中の音速は空気中の約3倍である',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '表示光ならびに表示色の使用について正しいのはどれか。\na. 心電図モニタの電極外れのときに黄色のランプが点灯する \nb. 保護接地線の被覆が黒色である \nc. 特別非常電源コンセントの外郭が緑色である \nd. 除細動器の充電完了時に赤色のランプが点灯する \ne. 心室細動の発生時に心電図モニタの赤色のランプが点滅する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1-2 のイミュニティ試験において想定されていない妨害はどれか。',
    options: ['静電気放電', '無線電波', '火花放電', '雷誘導電圧', '電離放射線'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  /** 31回(PM) */
  {
    question:
      '電流に対する人体の反応について正しいのはどれか。\na. 直接心臓に電流が流れ込んで起こる電撃をマクロショックという \nb. 直流電流は交流電流に比べて生体組織に化学的変化を起こしにくい \nc. 直接心臓に10μAの商用交流電流が流れると心室細動が誘発される \nd. 体表面に0.1Aの商用交流電流が流れると心室細動か誘発される \ne. 最小感知電流閾値は1kHzを境に周波数に比例して上昇する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '非接地配線方式の絶縁監視装置の警報が鳴ったときに、考えられるのはどれか。\na. 地絡が発生した \nb. 接地分岐線が断線した \nc. 絶縁抵抗が100kΩ以上になった \nd. 負荷の消費電流の合計が20Aを超えた \ne. 多数のME機器が使用されていた',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '正常状態の許容値が10μAなのはどれか。\na. CF形装着部の接触電流 \nb. CF形装着部の患者測定電流(交流の場合) \nc. BF形装着部の患者漏れ電流(直流の場合) \nd. BF形装着部の患者測定電流(直流の場合) \ne. CF形装着部の合計患者漏れ電流(交流の場合)',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '定格10Aの医療機器の着脱可能な保護接地線のインピーダンスを JIS T 0601-1に基づいた電圧降下法で測定した。インピーダンスが許容値内であるときの電圧降下[V]の上限はどれか。',
    options: ['0', '1.5', '2', '2.5', '3'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '高圧ガス保安法におけるガス容器の貯蔵に関して誤っているのはどれか。',
    options: [
      '転倒を防止する措置がある',
      '周囲温度は40°C以下である',
      '気密性が保たれた場所である',
      '充填容器と残ガス容器が区別できる',
      '可燃性ガス容器は種類ごとに区分して置く',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'フェイルセーフはどれか。\na. 医療ガス配管端末器のピン方式 \nb. 電気メスの対極板コード断線検知機構 \nc. 麻酔器における酸素供給停止時の亜酸化窒素ガス遮断装置 \nd. IABP装置のバッテリ搭載 \ne. 心電図モニタの不整脈アラーム',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '特定機能病院において、医療機器安全管理責任者が年に2回程度定期的に研修を行うべき医療機器はどれか。\na. 経皮的心肺補助装置 \nb. 電気メス \nc. 消化管内視鏡 \nd. 自動体外式除細動器(AED) \ne. 閉鎖式保育器',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  /** 32回(AM) */
  {
    question: '電撃に対する人体の反応について正しいのはどれか。',
    options: [
      '体表から受ける電撃をミクロショックという',
      '直接心臓に0.01mAの商用交流が流れると心室細動を誘発する',
      '直流電流は交流電流に比べて生体組織に化学的変化を起こしやすい',
      '商用交流の離脱限界電流値は最小感知電流値の5倍程度である',
      '最小感知電流閾値は50~60Hzを超えると周波数に比例して上昇する',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1における漏れ電流測定用器具(MD)において、100kHzの漏れ電流を測定したところ、電圧計の読みが0.1Vであった。このとき実際に流れた100kHzの漏れ電流のおよその値[mA]はどれか。',
    options: ['0.01', '0.1', '1', '10', '100'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '室温(20℃付近)、圧力15MPaで液化する医療ガスはどれか。\na. 窒 素 \nb. 二酸化炭素 \nc. 亜酸化窒素 \nd. 治療用空気 \ne. ヘリウム',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '機器やシステムの信頼性について正しいのはどれか。\na. 機器を直列に接続するとシステムの信頼度は低下する \nb. 定常アベイラビリティは機器が利用できる時間的割合を表す \nc. MTBFは修理に要した時間の平均値を表す \nd. MTTRは故障と故障との間の無故障時間の平均値を表す \ne. 故障率は初期故障期間より偶発故障期間の方が高い',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医用電気機器が外部から電磁波を受けた場合、本来の機能を維持できる能力(妨害排除能力)を意味するのはどれか。',
    options: ['EMC', 'EMI', 'ESD', 'emission', 'immunity'],
    answerIndex: 5,
    tags: [TAGS_TEXT.mds],
  },
  /** 32回(PM) */
  {
    question:
      'ME機器の表示光で「操作者による即時の対処が必要」を意味する色はどれか。',
    options: ['青', '黄', '緑', '橙', '赤'],
    answerIndex: 5,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '非接地配線方式について正しいのはどれか。\na. 絶縁変圧器の2次巻線から1次巻線への漏れ電流は10μA以下である \nb. 絶縁監視装置の表示値が1mAを超えると警報が発生する \nc. 地絡発生時における電源供給の確保が主目的である \nd. 多数のME機器を使用すると絶縁監視装置の警報が発生する可能性がある \ne. 保護接地設備は必要ない',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1 における単一故障状態はどれか。\na. 保護接地線の断線 \nb. 電源導線のいずれか1本の断線 \nc. 絶縁のいずれか一つの短絡 \nd. SIP/SOPへの外部電圧の印加 \ne. F形装前部の患者接続部への外部電圧の印加',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '着脱式ではない電源コードをもつ医用電気機器で、電源プラグの接地ピンから金属外装までの抵抗値の規定値は何Ω以下か。',
    options: ['0.1', '0.2', '0.5', '1', '2'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'IABPの始業点検項目でないのはどれか。\na. バッテリの充電状態 \nb. バルーン内圧の測定 \nc. 接触電流の測定 \nd. ヘリウムガスのボンベ内残量 \ne. トリガ信号の確認',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '内容積10Lの酸素ボンベの圧力調整器が5MPaを示しているとき、酸素ガスのおよその残量[L]はどれか。',
    options: ['50', '150', '200', '500', '1500'],
    answerIndex: 5,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'フールプルーフはどれか。\na. 医療ガスボンベのヨーク形バルブ \nb. 体外式ペースメーカの電源スイッチ \nc. IABP装置のガスリークアラーム機構 \nd. 体外式除細動器へのバッテリの搭載 \ne. 電気メスの対極板接触不良検知機構',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '臨床工学技士の業務で、書面等により医師の具体的な指示を受けなければならないのはどれか。\na. 人工呼吸中の吸引による喀痰の除去 \nb. 人工心肺装置操作中の血液流量の条件変更 \nc. 高気圧酸素治療中の加圧時間の設定 \nd. 血液浄化装置先端部(穿刺針)の抜去後の止血処置 \ne. 植込み型心臓ペースメーカヘのプログラミングヘッドの設置',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  /** 33回(AM) */
  {
    question: '医療機器とその有害事象との組合せで適切でないのはどれか。',
    options: [
      'マイクロ波加温装置 -------- キャビテーション',
      '熱希釈式心拍出量計 -------- 不整脈',
      '経皮的酸素分圧モニタ -------- 水 疱',
      '電気メス -------- 熱 傷',
      'レーザメス -------- 眼傷害',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医用電気機器に関する個別規格はどれか。\na. JIS T 0601-1 \nb. JIS T 0601-1-1 \nc. JIS T 0601-1-2 \nd. JIS T 0601-2-1 \ne. JIS T 0601-2-2',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: 'CF形装着部について誤っているのはどれか。',
    options: [
      'ミクロショック対策が施されている',
      'マクロショック対策が施されている',
      '患者装着部は非接地である',
      '心臓内にカテーテルを挿入する場合に必須である',
      '電極等を体表面に装着する場合に必須である',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療ガスと高圧ガス容器保安規則で定める塗色との組合せで正しいのはどれか。',
    options: [
      'ヘリウム -------- ねずみ色',
      '空 気 -------- 黄 色',
      '酸 素 -------- 緑 色',
      '窒 素  -------- 青 色',
      '二酸化炭素 -------- 黒 色',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '携帯電話による医療機器への影響に関する指針ならびに関連事項について、誤っているのはどれか。',
    options: [
      '植込み型医療機器のイミュニティ試験は ISO等で規定されている',
      '植込み型医療機器から携帯電話を15cm程度以上離して使用する',
      '非植込み型医療機器から携帯電話を1m程度以上離して使用する',
      '携帯電話の電波出力は電波状況が悪いときに小さくなる',
      '携帯電話の電波は着信時にも出力される',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '静電気について正しいのはどれか。\na. 液体では表面に帯電する \nb. 液体では表面に帯電する \nc. 接地は静電気除去の方法として有効である \nd. 帯電量は絶縁抵抗の小さい物体ほど大きい \ne. 異なる材質の不導体を摩擦すると両材質に同一符号の電荷が帯電する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  /** 33回(PM) */
  {
    question: '定格電流値 15Aの医用コンセントの保持力として適切なのはどれか。',
    options: ['1 N', '5 N', '10 N', '50 N', '75 N'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '非接地配線方式について正しいのはどれか。\na. 絶縁変圧器の定格容量は 50 kVA 以下である \nb. 絶縁変圧器の 2 次側から 1 次側への漏れ電流は 10 nA 以下である \nc. 絶縁変圧器の 2 次側の対地インピーダンスが 50 kX 以下になると警報を発する \nd. 地絡発生時の電源確保が主目的である \ne. 多数の ME 機器を同時に使用すると警報が発生する可能性がある',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '定格電流10AのME機器の保護接地回路抵抗を JIS T 0601-1 に基づいて測定したところ、電圧計の表示値が1.5Vであった。このME機器の接地線抵抗[mX]はどれか。',
    options: ['60', '75', '100', '120', '150'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ある機器のMTBFが 180日、MTTRが10日であるとき、定常アベイラビリティはどれか。',
    options: ['1/19', '1/18', '1/17', '17/18', '18/19'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '使用準備完了を意味する表示光の色はどれか。',
    options: ['青', '緑', '黄', '橙', '赤'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  /** 34回(AM) */
  {
    question:
      '医療機関における医療機器安全管理責任者の配置を義務づけている法律はどれか。',
    options: [
      '医師法',
      '医療法',
      '製造物責任法',
      '臨床工学技士法',
      '医薬品医療機器等法',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '臨床工学技士の業務に含まれないのはどれか。',
    options: [
      '動脈留置カテーテルからの採血',
      '人工呼吸器の運転条件の設定',
      '人工呼吸中の気管吸引による喀痰除去',
      '血液浄化装置の先端部の内シャントへの穿刺',
      'ペースメーカ植込み時のジェネレータと電極リードの接続',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: 'JIS T 1022 における無停電非常電源のコンセント外郭の色はどれか。',
    options: ['白', '赤', '緑', '茶', '灰'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1 における単一故障状態はどれか。\na. 追加保護接地線の断線 \nb. 3P プラグの接地ピンの折損 \nc. 電源導線のいずれか 1本の断線 \nd. SIP/SOP への外部電圧の印加 \ne. F形装着部の患者接続部への外部電圧印加',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '信頼度 r = 0.3 の要素を 4個並列に結合した系の全体の信頼度はどれか。',
    options: ['0.01', '0.24', '0.6', '0.76', '0.99'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医用電気機器が他からの電磁的な妨害に耐える能力を示すのはどれか。',
    options: ['EMC', 'EMI', 'ESD', 'emission', 'immunity'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  /** 34回(PM) */
  {
    question:
      '事故が発生した場合のリスクマネジメントのあり方として適切でないのはどれか。',
    options: [
      '状況の把握',
      '原因の分析',
      '責任の追及',
      '再発防止策の立案',
      '対処策の事後評価',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '100 kHzの電流を成人男性に通電したときの最小感知電流[mA]に近いのはどれか。',
    options: ['0.1', '1', '10', '100', '1000'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '非接地配線方式について正しいのはどれか。\na. 地絡事故による停電を防止する \nb. 絶縁変圧器の二次側電路は片側を接地する \nc. 絶縁変圧器の定格容量は 30kVA以下である \nd. 絶縁変圧器の二次側の対地インピーダンスは 1 MX以下で警報が発生する \ne. 絶縁変圧器の二次側から一次側への漏れ電流値は 0.1mA以下である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 1022でMRI室などのカテゴリCに属する医用室に設けなければならない電気設備はどれか。\na. 保護接地 \nb. 等電位接地 \nc. 非接地配線方式 \nd. 無停電非常電源 \ne. 一般または特別非常電源',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 0601-1 における漏れ電流測定で使用する電圧測定器に必要な性能はどれか。\na. 指示誤差が +-5%以内である \nb. 入力容量が150pF以下である \nc. 入力抵抗が1MΩ以上である \nd. 出力抵抗が10kΩ以上である \ne. 測定できる周波数の上限は10MHzである',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '内容積 3.5Lの酸素ボンベの圧力調整器が10MPaを示している。 5L/minの流量で酸素を投与した場合の投与可能時間はおよそ何分か。',
    options: ['35', '70', '175', '350', '500'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '電磁環境について誤っているのはどれか。',
    options: [
      'ME機器に対する携帯電話の推奨離隔距離は1mである',
      '携帯電話は受信状態がよい場合に送信出力が小さくなる',
      '無線LANに影響を及ぼすME機器がある',
      '医用テレメータは近隣病院との混信がありうる',
      '医用テレメータの受信範囲を広げるには送信機の送信出力を上げる',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  /** 35回(AM) */
  {
    question:
      '医師の具体的な指示が必要な臨床工学技士業務はどれか。\na. 人工呼吸装置の酸素濃度変更 \nb. 動脈留置カテーテルからの採血 \nc. 血液浄化装置の運転条件の変更 \nd. 高気圧治療装置内の消毒 \ne. 人工心肺装置点検項目の変更',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '電撃に対する人体の反応で誤っているのはどれか。',
    options: [
      '心臓に直接電流が流れることによって起こる電撃をミクロショックという',
      'ミクロショックの心室細動電流は最小感知電流の1/100である',
      '100kHzの交流電流での最小感知電流は約100mAである',
      '小児の最小感知電流値は成人の1/2程度である',
      '直流電流は交流電流に比べて生体組織に化学的変化を起こしやすい',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ME機器の分類について正しいのはどれか。\na. B形装着部は外部電圧の印加に対して保護されている \nb. CF形装着部は接地されている \nc. 内部電源ME機器の追加保護手段は補強絶縁である \nd. クラスIのME機器の追加保護手段は保護接地である \ne. クラスIIのME機器は在宅使用に適している',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '燃性を有するガスはどれか。\na. 空気 \nb. 亜酸化窒素 \nc. 二酸化炭素 \nd. ヘリウム \ne. 窒素',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '機器やシステムの信頼性について正しいのはどれか。\na. 機器を直列に接続するとシステムの信頼度は低下する \nb. 定常アベイラビリティは機器が利用できる時間的割合を表す \nc. MTBFは修理に要した時間の平均値を表す \nd. MTTRは故障と故障との間の無故障時間の平均値を表す \ne. 故障率は初期故障期間より偶発故障期間の方が高い',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '電磁波に対する妨害抑制能力と妨害排除能力の両立性を表現しているのはどれか。 ',
    options: ['EMI', 'EMD', 'EMC', 'ESD', 'EAS'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  /** 35回(PM) */
  {
    question: '内視鏡外科手術について正しいのはどれか。',
    options: [
      '気腹には窒素を使用する',
      '気腹により静脈還流量は減少する',
      '気腹中の電気メス使用は困難である',
      '腹腔内圧は手動で維持する',
      '下肢深部静脈血栓症対策は不要である',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '医療機器とその有害事象との組合せで適切でないのはどれか。',
    options: [
      'マイクロ波加溫装置 -------- キャビテーション',
      '熱希釈式心拍出量計 -------- 不整脈',
      '経皮的酸素分圧モニタ -------- 水疱',
      '電気メス -------- 熱傷',
      'レーザメス -------- 眼傷害',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: 'ME機器の単一故障状態でないのはどれか。',
    options: [
      '絶縁のいずれか1つの短絡',
      '沿面距離または空間距離のいずれか1つの短絡',
      '保護接地線の断線',
      '電源導線のいずれか1本の断線',
      '強化絶縁の短絡',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '定格電流15Aの医用コンセントの保持力[N]として適切なのはどれか。',
    options: ['1', '5', '10', '50', '75'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '定格電圧100V消費電力500WのME機器の保護接地線抵抗を測定するときにJIS T 0601-1で規定されている測定電流値[A]はどれか。',
    options: ['10', '15', '20', '25', '30'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '酸素流量2L/minで10時間投与したいとき酸素ボンベの内圧は少なくとも何MPa必要か。ただし、容器の内容量は40Lとする。',
    options: ['1', '3', '5', '7', '10'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'ある機器の信頼度を調査したところ、20回のうち19回使用できた。同時に使用するもう1台の機器は10回のうち8回使用できた。この2台を同時に使用できる確率はどれか。',
    options: ['0.99', '0.95', '0.88', '0.80', '0.76'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療機関における医療機器安全管理責任者の配置を義務づけている法律はどれか。',
    options: [
      '医薬品医療機器等法',
      '労働安全衛生法',
      '臨床工学技士法',
      '製造物責任法',
      '医療法',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  /** 36回(AM) */
  {
    question:
      '体表面に100kHzの電流が流れたとき、およその最小感知電流[mA]はどれか。',
    options: ['0.1', '1', '10', '100', '1000'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '単一故障状態でないのはどれか。',
    options: [
      '強化絶縁の短絡',
      '絶縁のいずれか一つの短絡',
      '電源導線のいずれか1本の断線',
      '沿面距離または空間距離のいずれか一つの短絡',
      '保護接地線またはME機器内部の保護接地接続の開路',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: '医療ガス設備の配管端末器で標準送気圧力が最も高いのはどれか。',
    options: [
      '酸素',
      '治療用空気',
      '亜酸化窒素',
      '二酸化炭素',
      '手術機器駆動用窒素',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'フェイルセーフはどれか。\na. 麻酔器の酸素供給停止時の亜酸化窒素ガス遮断装置 \nb. 電気メスの対極板コード断線検知機構 \nc. 医療ガス配管端末器のピン方式 \nd. 心電図モニタの不整脈アラーム \ne. IABP装置のバッテリ搭載',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '臨床工学技士の業務として認められていないのはどれか。\na. 人工呼吸業務における気管挿管 \nb. 人工呼吸装置使用時の吸引による喀痰の除去 \nc. 動脈留置カテーテルからの採血 \nd. 血管への直接穿刺による輸血 \ne. ECMO用カニューレの挿入',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  /** 36回(PM) */
  {
    question:
      'JIS T 0601-1で規定されている「使用の準備が完了」を示す表示光の色はどれか。',
    options: ['白', '橙', '黄', '青', '緑'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'JIS T 1022の規定で一般の人工透析室に設けなければならない電気設備はどれか。\na. 保護接地 \nb. 等電位接地 \nc. 非接地配線方式 \nd. 無停電非常電源 \ne. 一般非常電源',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mds],
  },
  {
    question: 'ME機器の保守点検で正しいのはどれか。',
    options: [
      '外観点検は機器に手を触れずに目視で行う',
      '作動点検は患者に使用する前までの点検のことをいう',
      '安全性点検は機器のオーバーホールを含む',
      '性能点検は機器の定性的試験のことをいう',
      '故障点検は故障原因究明を目的とする',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医療ガスと高圧ガス容器保安規則で定められている塗色区分との組合せで誤っているのはどれか。',
    options: [
      '酸素 -------- 黒色',
      '空気 -------- ねずみ色',
      '二酸化炭素 -------- 緑色',
      '亜酸化窒素 -------- 青色',
      'ヘリウム -------- ねずみ色',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'あるME機器の定常アベイラビリティが0.9、MTTRが20日のとき、MTBF[日]はどれか。',
    options: ['100', '130', '180', '220', '310'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      'EMCに関連する国際規格で推奨されている携帯電話と植込み型医療機器との離隔距離[cm]はどれか。',
    options: ['3', '15', '22', '50', '100'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mds],
  },
  {
    question:
      '医薬品医療機器等法の医療機器の人体に及ぼすリスク分類で、高度管理医療機器はどれか。\na. 輸液ポンプ \nb. 除細動器 \nc. 人工呼吸器 \nd. MR装置 \ne. X線CT装置',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mds],
  },
];
