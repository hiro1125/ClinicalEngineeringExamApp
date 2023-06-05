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
];
