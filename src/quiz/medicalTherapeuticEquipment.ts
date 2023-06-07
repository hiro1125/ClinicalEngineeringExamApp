import { TAGS_TEXT } from '.';
import { QuizData } from '../../types/type';

export const medicalTherapeuticEquipment: QuizData[] = [
  /** 28回(AM) */
  {
    question:
      '治療機器のエネルギー作用について正しいのはどれか。\na. エネルギー密度に対する主作用はエネルギーの種類によらない \nb. 主作用は治療余裕度を超えるエネルギー密度で現れる \nc. 治療関値を超えるエネルギー密度で治療効果が現れる \nd. 副作用はエネルギー密度が大きくなると増大する \ne. 不可逆的な樟害は0.1mW/cm2を超えるエネルギー密度で現れる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '心臓ペースメーカについて正しいのはどれか。\na. 植込み型にはヨウ素リチウム電池は使用されない \nb. 出力パルス幅は約100msである \nc. 電極装着後、刺激闘値は経時的に低下する \nd. NBG(ICHD)コードの第一文字は刺激部位を表す \ne. 体外式ペースメーカの出力点検時には500Ωの負荷抵抗を接続する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '輸液ポンプについて正しいのはどれか。',
    options: [
      'シリンジポンプには閉塞アラームがない',
      'シリンジポンプには気泡アラームがある',
      '滴数制御方式は薬液の表面張力の影響を受ける',
      '低流量の場合にはフィンガ式が良い',
      '滴下センサには紫外線を用いる',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '冠動脈のインターペンション（PCI)について正しいのはどれか。\na. エックス線装置は不要である \nb. 鎖骨下静脈を穿刺する \nc. 100気圧でバルーンを拡張する \nd. 再狭窄防止にステントを挿入する \ne. ロータプレータ使用で一時的な冠動脈血流減少が生じる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しい組合せはどれか。\na.Ar レーザ -------- 網膜凝固 \nb.NYAG レーザ -------- 光線力学療法 \nc.CO2 レーザ -------- 疹痛治療 \nd.Dye レーザ -------- 凝固止血 \ne.ArF エキシマレーザ -------- 角膜切除',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.itm],
  },
  {
    question: '内視鏡外科手術で正しいのはどれか。',
    options: [
      '気腹に空気を使用する',
      '気腹圧は100mmHg程度に設定する',
      '腹腔鏡手術では硬性鏡を使用する',
      '電気メスは使用できない',
      '自然気胸は適応外である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  /** 28回(PM) */
  {
    question:
      '電気メスについて正しいのはどれか。\na. スプリット形対極板により電極の接触不良を監視する\nb. 凝固には断続波を用いる\nc. 発振器にはマグネトロンを用いる\nd. 静電結合型対極板の接触抵抗は導電型よりも低い\ne. 対極板面積の安全範囲は出力に依存する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '除細動器について正しいのはどれか。\na. AEDの出力波形は単相性である \nb. 非医療従事者のAED使用には講習会の受講が義務づけられている \nc. 手動式除細動器の日常点検として作動点検を行う \nd. 植込み型除細動器は抗頻拍ベーシング機能を備えている \ne. 植込み型除細動器の除細動波形は単棺性である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '体外衝撃波砕石装置について正しいのはどれか。',
    options: [
      '電極放電式では空気中で放電させる',
      '心電同期装置を使用する',
      '腹部大動脈癌患者にも使用できる',
      '腸管内ガス存在下で安全に使用できる',
      '膀胱結石が適応である',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '超音波凝固切開装置で正しいのはどれか。',
    options: [
      'ブレードは1MHzで振動する',
      '対極板が必要である',
      '生理食塩液で洗浄しながら使用する',
      '比較的太い動脈の凝固切聞が可能である',
      '凝固温度はレーザメスよりも高温である',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'がん温熱療法について正しいのはどれか。\na. RF容量結合型加温では金属ベッドを使用する \nb. マイクロ波加温法は全身加温に適する \nc. 化学療法と併用される \nd. 加温後細胞は熱耐性を示す \ne. 表面冷却にはボーラスを用いる',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  /** 29回(AM) */
  {
    question: '誤っている組合せはどれか。',
    options: [
      'ベータトロン -------- 放射線',
      '人工呼吸器 -------- 機械力',
      '電気焼灼器 -------- 電 流',
      '温熱治療器 -------- 放射線',
      '超短波治療器 -------- 電磁波',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '除細動器について正しいのはどれか。\na. 洞不全症候群は適応症である \nb. 成人の体外通電では500Jから開始する \nc. 成人の体外通電では面積50cm2以上の電極を使用する \nd. ICDは右室を刺激する \ne. ICDの通電出力は500Jである',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '植込み型心臓ペースメーカについて正しいのはどれか\na. VDDモードでは刺激部位は心房である \nb. 電源にはニッケルカドミウム電池が使用される \nc. VVIRでは人体の活動量に応答する機能がある \nd. 心臓再同期療法では右室と左室とを同時に刺激する \ne. DDD ペースメーカは慢性心房細動の徐脈によい適応がある',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '冠動脈のインターベンション治療（PCI）について正しいのはどれか。',
    options: [
      '治療中に造影剤を使用する',
      'カテーテルは超音波診断装置で誘導する',
      '内頸静脈を穿刺する',
      'バルーンの拡張圧は2 気圧前後である',
      'ロータブレータ使用中の冠血流は増加する',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しい組合せはどれか。\na.CO2 レーザ -------- 網膜凝固 \nb.Dye レーザ -------- 光線力学療法 \nc.ArF エキシマレーザ -------- 角膜切除 \nd.Nd:YAG レーザ -------- 凝固止血 \ne.Ar レーザ -------- 切 開',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '腹部内視鏡外科手術において正しいのはどれか。\na. 気腹に二酸化炭素を用いる \nb. 気腹により静脈還流は増加する \nc. 硬性鏡は使用できない \nd. トロッカを介して器具を挿入する \ne. 肺血栓塞栓症のリスクがある',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  /** 29回(PM) */
  {
    question:
      '電気メスについて正しいのはどれか。\na. 凝固出力は連続波である \nb. 点検用負荷抵抗には無誘導抵抗器が使用される \nc. 対極板面積の安全範囲は出力に依存する \nd. 静電結合型対極板の表面は絶縁されている \ne. スプレー凝固では雑音障害は発生しない',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '心臓ペースメーカについて正しいのはどれか。\na. 胸腔内にジェネレータ(本体)を留置する \nb. NBG(ICHD)コードの第二文字はセンシング部位を表す \nc. パルス幅は0.5ms前後である \nd. 電極装着直後は刺激閾値の低下が続く \ne. 体外式ペースメーカの出力点検時には50Ωの負荷抵抗を接続する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: 'ESWLについて正しいのはどれか。',
    options: [
      '電極放電方式では結石の位置を第2焦点に合わせる',
      '圧電素子方式では音響レンズを用いる',
      '超音波照準方式は尿管結石に有効である',
      '膀胱結石治療の第一選択である',
      '肺組織にも安全である',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '輸液ポンプで誤っているのはどれか。',
    options: [
      'シリンジポンプは微量注入に適する',
      '滴下センサは赤外線を用いる',
      'ペリスタルティック方式には気泡アラームがある',
      '流量制御型では汎用輸液セットが使える',
      '与圧注入方式は小型軽量である',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '超音波吸引手術装置で正しいのはどれか。',
    options: [
      '先端は1〜3mmの振幅で振動する',
      '対極板が必要である',
      '生理食塩液で洗浄しながら使用する',
      '電気メスよりも強い凝固能力を有する',
      '骨切開に有効である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  /** 30回(AM) */
  {
    question:
      '臨床用MRIについて正しいのはどれか。\na. 軟部組織の画像化に適している \nb. 炭素原子の空間分布を画像化する \nc. 水分の少ない組織の撮影に適している \nd. 撮像法としてT1強調がある \ne. 血管造影が可能である',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '植込み型心臓ペースメーカについて正しいのはどれか。\na. 胸腔内にジェネレータ(本体)を留置する \nb. 心内膜電極は左室に留置する \nc. ICHD(NBG)コードの3文字目のIは抑制を意味する \nd. 電極留置直後は刺激閾値が上昇する \ne. 500ms前後の刺激パルスが効率的である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: 'ESWLについて正しいのはどれか。',
    options: [
      '平面コイル型電磁誘導方式ではパラボラ型反射体を用いる',
      '電極放電方式では結石の位置を第一焦点に合わせる',
      '超音波による照準は常時観察が可能である',
      '尿道結石治療の第一選択である',
      '腸管組織にも安全である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しい組合せはどれか。\na.Ho:YAGレーザ -------- 液体レーザ \nb.Arレーザ -------- 気体レーザ \nc.Ga-Al-As -------- 半導体レーザ \nd.Nd:YAG レーザ -------- 気体レーザ \ne.ArFエキシマレーザ -------- 固体レーザ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '超音波凝固切開手術装置について正しいのはどれか。\na. 先端は1〜3mmの振幅で振動する \nb. 50kHz前後の周波数を用いる \nc. 凝固温度は電気メスよりも低温である \nd. 内視鏡外科手術で頻用される \ne. 骨切開に有効である',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'ハイパーサーミアについて正しいのはどれか。\na. 容量結合型加温には数kHz-数十kHzの周波数を使用する \nb. 超音波加温は空気層を通して組織を加温する \nc. 皮膚表面の冷却にボーラス(水バッグ)を用いる \nd. マイクロ波加温では周波数の増加に対して加温できる深さが減少する \ne. 組織内加温では針電極を刺入する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  /** 30回(PM) */
  {
    question:
      '内視鏡について正しいのはどれか。\na. 血管内視鏡にはファイバスコープが使用される \nb. 電子スコープの受光素子にはCdSeが使用される \nc. 高速撮影のためにフォトトランジスタが使用される \nd. 深部血管の撮影には赤色狭帯域光が使用される \ne. キセノンランプが光源に使用される',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '治療機器について正しい組合せはどれか。',
    options: [
      '心臓ペースメーカ -------- マイクロ波',
      '電気メス -------- 高周波電流',
      'レーザメス -------- 電子線',
      'ESWL -------- 赤外線',
      'IABP -------- 音波',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '除細動器について正しいのはどれか。\na. 通電時間は2~5秒である \nb. 交流除細動方式が一般的である \nc. 5000J前後で体外通電する \nd. 成人の体外通電では50cm2程度の電極を使用する \ne. 体内通電時は体外通電よりも低い出力に設定する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '電気メスのデイスポーザブル対極板の装着について正しいのはどれか。\na. 対極板の一点に荷重がかからないようにする \nb. 対極板の装着部には絶縁性のある消毒液を使用する \nc. 対極板コードをコイル状に巻く \nd. 身体が小さい場合は対極板を切って小さくする \ne. 対極板と皮膚との間に空気が入らないようにする',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '冠状動脈のカテーテルインターベンション治療(PCI) について正しいのはどれか。\na. 開胸して実施する \nb. X 線透視下に実施する \nc. 狭窄部拡張中は冠血流が減少する \nd. バルーン拡張圧は50気圧前後である \ne. ステント留置後の再狭窄はない',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しい組合せはどれか。\na.Arレーザ -------- 網膜光凝固 \nb.ArFエキシマレーザ -------- 近視手術 \nc.CO2レーザ -------- 鎮痛治療 \nd.He-Neレーザ -------- 凝固止血 \ne.Nd:YAGレーザ -------- 内視鏡的がん治療',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '内視鏡的外科手術において正しいのはどれか。',
    options: [
      '気腹に亜酸化窒素を用いる',
      '気腹により静脈還流は増加する',
      '肺血栓塞栓症の合併症はない',
      '電気メスは使用できない',
      '自然気胸は適応である',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
];
