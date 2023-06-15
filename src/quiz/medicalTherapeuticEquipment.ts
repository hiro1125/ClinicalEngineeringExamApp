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
  /** 31回(AM) */
  {
    question:
      '治療機器とエネルギーとの組合せで正しいのはどれか。\na.ガンマナイフ -------- 粒子線 \nb.温熱治療器 -------- 紫外線 \nc.マイクロ波治療器 -------- 電磁波 \nd.サイクロトロン -------- 電子線 \ne.高気圧酸素治療装置 -------- 陽 圧',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '電気メスで正しいのはどれか。',
    options: [
      '300~500kHz帯の電流を用いる',
      '切開モードでは断続波を用いる',
      '導電接触形対極板は静電接触形対極板より接触インピーダンスが大きい',
      '高周波漏れ電流の許容値は500mA以内である',
      '負荷抵抗10Ωでキャリブレーションする',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '現在用いられているESWLの衝撃波発生方式でないのはどれか。\na. 電磁板方式 \nb. 電極放電方式 \nc. 圧電素子方式 \nd. レーザ方式 \ne. 圧縮空気方式',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '冠動脈インターベンション治療(PCI)について正しいのはどれか。',
    options: [
      '上腕静脈からカテーテルを挿入する',
      '患部まで超音波診断装置でカテーテルを誘導する',
      '狭窄部ではバルーンを0.2MPa程度で加圧する',
      'ロ一夕ブレーク使用時に冠動脈血流は減少する',
      'ステント留置直後から抗血小板療法は不要である',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '治療用レーザ装置と適用との組合せで正しいのはどれか。\na.ArFエキシマレーザ(193nm) -------- 粒子線 \nb.CO2レーザ(10.6μm) -------- 尿管結石破砕 \nc.Nd:YAGレーザ(1.064μm) -------- 疼痛治療 \nd.半導体レーザ(630~680nm) -------- 光線力学療法 \ne.Dyeレーザ(585~630nm) -------- あざ治療',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '超音波凝固切開装置で誤っているのはどれか。',
    options: [
      'アクティブブレードは45~55kHzの周波数で振動する',
      '70~100°Cで組織中のタンパク質を凝固させる',
      '細い血管からの出血を止めることができる',
      '電気メスに比べて短時間で凝固切開が可能である',
      '内視鏡外科手術に用いられる',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  /** 31回(PM) */
  {
    question:
      '内視鏡画像計測の構成要素でないのはどれか。\na. 光ファイバ \nb. CCD \nc. レンズ \nd. 光電子増倍管 \ne. 検出コイル',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'マイクロ波手術装置で正しいのはどれか。\na. ISM周波数を使用する \nb. 同軸ケープルを使用する \nc. 渦電流損で発熱する \nd. 対極板を使用する \ne. 組織を凝固する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '植込み型除細動器(ICD)について正しいのはどれか。',
    options: [
      'Brugada症候群には禁忌である',
      '頻脈停止機能を有する',
      '刺激電極は左室に留置する',
      '開胸手術で留置する',
      '360Jで刺激する',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しいのはどれか。\na. シリンジポンプは大量急速注入に適する \nb. シリンジポンプには気泡アラームがついている \nc. 輸液ポンプの滴下センサは赤外線を用いている \nd. 流量制御型輸液ポンプでは専用の輸液セットを用いる \ne. 携帯型ポンプには与圧注入方式がある',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '超音波吸引手術器で正しいのはどれか。\na. 振動子は5MHzで振動する \nb. 対極板が必要である \nc. 電気メスより止血機能に優れる \nd. 生理食塩液で洗浄しながら使用する \ne. 白内障手術に用いる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '腹腔鏡手術で誤っているのはどれか。',
    options: [
      '気腹に二酸化炭素を使用する',
      '気腹圧は100mmHg程度に設定する',
      '気腹による血圧低下が起こる',
      'トロッカ(トロカール)を使用する',
      '自動吻合器が使用できる',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  /** 32回(AM) */
  {
    question:
      '誤っている組合せはどれか。\na.超短波治療器 -------- 高周波 \nb.筋刺激装置 -------- 光 \nc.X線装置 -------- 粒子線 \nd.ネブライザ -------- 超音波 \ne.除細動器 -------- パルス波',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '電気メスについて正しいのはどれか。',
    options: [
      '500MHzの高周波が用いられる',
      '出力電力と必要な対極板面積は反比例する',
      '純切開にはバースト波が用いられる',
      '出力回路にはコンデンサが直列に挿入される',
      '高周波接地は対極板側回路を抵抗により接地する',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '植込み型ペースメーカについて正しいのはどれか。\na. 慢性心房細動の徐脈はDDDの適応である \nb. VVIの電極リードは2本である \nc. パルス振幅は3mVである \nd. リチウム・ヨウ素電池を使用する \ne. 単極電極ではカテーテル先端部はマイナス極である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '胸腔ドレナージで持続吸引する場合、設定値は通常-5～-20の陰圧とするが、このときの単位はどれか。',
    options: ['kgf/cm2', 'atm', 'cmH20', 'kPa', 'psi'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '内視鏡外科手術で正しいのはどれか。\na. 気腹に二酸化炭素を用いる \nb. 気腹で静脈還流は増加する \nc. 硬性鏡は使用できない \nd. 胸腔内手術は適応外である \ne. 肺血栓塞栓症のリスクがある',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  /** 32回(PM) */
  {
    question:
      '体外式除細動器で正しいのはどれか。\na. 二相生波形は半導体スイッチにより極性を反転する \nb. 出力パルス幅は2~5μsである \nc. 出力端子の一方は接地されている \nd. 通電テストには50Ωの無誘導抵抗を用いる \ne. 心房細動除去にはR波同期を用いる',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '冠動脈インターベンション治療(PCI)について正しいのはどれか。\na. ガイドワイヤはX線透視下で誘導する \nb. バルーン拡張時に冠動脈血流量は減少する \nc. 治療後の再狭窄はない \nd. ロータブレータは衝撃波を利用する \ne. 術後の抗血小板療法は不要である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '輸液ポンプで誤っているのはどれか。',
    options: [
      'シリンジポンプは微量注入に適する',
      '滴下センサには赤外線が用いられる',
      '純切開にはバースト波が用いられる',
      '流量制御型では汎用輸液セットが使える',
      '与圧注入方式は小型軽量である',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しい組合せはどれか。\na.Arレーザ -------- 近視治療 \nb.ArFエキシマレーザ -------- 網膜光凝固 \nc.CO2レーザ -------- 切開 \nd.Nd:YAGレーザ -------- 凝固止血 \ne.Dyeレーザ -------- 疼痛治療',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'RF容量結合型加温法で正しいのはどれか。\na. 100MHz以上の周波数の電波を用いる \nb. 誘電損により発熱する \nc. 電気抵抗の低い組織ほど加温されやすい \nd. 表面冷却のためにボーラス(水バッグ)を使用する \ne. 電極サイズが小さいほど電極近傍の加温強くなる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  /** 33回(AM) */
  {
    question:
      '植込み型心臓ペースメーカについて正しいのはどれか。\na. 心房内にジェネレータを留置する \nb. 左房に心内膜電極を留置する \nc. ICHD（NBG）コードのTはトリガを意味する \nd. 刺激パルス幅は0.5ms前後である \ne. 電極装着後の刺激閾値は不変である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '除細動器について正しいのはどれか。',
    options: [
      '交流除細動方式が一般的である',
      '単相性波形が一般的である',
      '通電時間は0.1〜0.5秒である',
      '4000J前後で体外通電する',
      '体内通電時の出力は体外通電時の10〜20%程度にする',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '心臓血管作動薬の静脈内持続投与時に推奨すべきものはどれか。',
    options: [
      'ローラ型ポンプ',
      'フィンガ型ポンプ',
      'シリンジ型ポンプ',
      'ボルメトリック型ポンプ',
      '自然滴下式',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'ESWLの適応でない尿路結石はどれか。\na. 上部尿管結石 \nb. 中部尿管結石 \nc. 下部尿管結石 \nd. 膀胱結石 \ne. 尿道結石',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '内視鏡外科手術で正しいのはどれか。',
    options: [
      '気腹には酸素を使用する',
      '気腹によって血圧は上昇する',
      '気腹中の電気メス使用は禁忌である',
      '肺動脈血栓塞栓症対策が必要である',
      '手術用ロボットは無人手術が可能である',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '医療機器とその有害事象との組合せで適切でないのはどれか。',
    options: [
      'マイクロ波加温装置  -------- キャビテーション',
      '熱希釈式心拍出量計 -------- 不整脈',
      '経皮的酸素分圧モニタ -------- 水 疱',
      '電気メス -------- 熱 傷',
      'レーザメス -------- 眼傷害',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  /** 33回(PM) */
  {
    question:
      '正しい組合せはどれか。\na. 切開には連続正弦波が用いられる \nb. 対極板接触面積の増加は熱傷の原因である \nc. 出力回路には抵抗が挿入されている \nd. スプリット型対極板は接触インピーダンスを測定する \ne. バイポーラ電極は挟まれた部位を凝固する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: 'ペースメーカの ICHD（NBG）コードで誤っているのはどれか。',
    options: [
      'AAIでは心房のみでペーシングを行う',
      'VVIでは心房に同期してペーシングを行う',
      'DDDでは心房と心室の両方でペーシングを行う',
      'VDDでは心室のみでペーシングを行う',
      'VOOでは固定レートでペーシングを行う',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '冠状動脈インターベンション治療（PCI）について正しいのはどれか。',
    options: [
      'X線装置は不要である',
      'ガイドワイヤを使用する',
      'バルーン拡張圧は 60 気圧程度である',
      '狭窄拡張中の冠血流は増加する',
      'ステント留置は禁忌である',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '誤っている組合せはどれか。\na.Arレーザ -------- 角膜形成術 \nb.ArFエキシマレーザ -------- 網膜光凝固 \nc.CO2レーザ -------- 疼痛治療 \nd.Dyeレーザ -------- 光線力学療法 \ne.Nd:YAG レーザ -------- 内視鏡的治療',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: 'ハイパーサーミアについて正しいのはどれか。',
    options: [
      'RF容量結合型加温法は2.45GHzの電磁波を使用する',
      '細胞の熱耐性は24時間で消失する',
      '加温温度は60℃以上を目標とする',
      '化学療法と併用する',
      'マイクロ波加温法は2枚の電極を使用する',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  /** 34回(AM) */
  {
    question: '電流が直接作用する治療はどれか。',
    options: ['ECMO', 'ESWL', 'IABP', 'ICD', 'PTCA'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '電気メスについて正しいのはどれか。\na. バイポーラ電極は対極板が必要である \nb. 凝固にはバースト波を用いる \nc. 身体の部分同士の接触が分流熱傷の原因となる \nd. ペースメーカ障害の原因となる \ne. 出力電力の増加に伴い対極板の必要面積は減少する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: 'ESWLについて正しいのはどれか。',
    options: [
      '膀胱結石治療の第一選択である',
      '伝搬経路に存在する動脈瘤にも安全である',
      'X線照準方式は腸管ガスの影響を受ける',
      '水中放電方式では球の中心に衝撃波が集束する',
      '電磁板方式では音響レンズが使用される',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '輸液ポンプについて正しいのはどれか。',
    options: [
      '微量薬液を高い定常性で送れるのはペリスタルティック方式である',
      '流量制御型の方が滴数制御型よりも流量の精度が高い',
      'シリンジ型で起きるサイフォニング現象では、薬液がシリンジへ逆流する',
      'ペリスタルティック方式の場合、輸液セットのクレンメを機器本体よりも上につける',
      'JISでは輸液ポンプの精度は設定値に対して誤差が、±15%以内と規定されている',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '超音波凝固切開装置について正しいのはどれか。\na. 5〜10mmの振幅で先端が振動する \nb. 55kHz前後の振動を用いる \nc. 凝固温度はレーザメスよりも低温である \nd. 対極板が必要である \ne. 内視鏡外科手術での使用は禁忌である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'ハイパーサーミアについて正しいのはどれか。\na. 腫瘍組織の血流量は温度に比例して増加する \nb. マイクロ波加温は深部加温に適する \nc. 超音波加温はガスの多い臓器に適する \nd. 誘電型加温は脂肪層の発熱が大きい \ne. 誘電型装置の電極パッドには冷却水を灌流する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  /** 34回(PM) */
  {
    question: '内視鏡画像計測について誤っているのはどれか。',
    options: [
      'カプセル内視鏡の光源にはLEDが用いられる',
      '超音波内視鏡ではセクタ走査が用いられる',
      '狭帯域光観察（NBI）では2つの狭帯域波長光を用いる',
      'カプセル内視鏡は無線回路を内蔵している',
      '電子内視鏡の先端にはイメージセンサが装着されている',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '植込み型ペースメーカについて正しいのはどれか。',
    options: [
      'AAIは心室をペーシングする',
      'デマンド機構は pulse on T対策には無効である',
      'デュアルチャンバ・ペースメーカの AV ディレイは 120～250 ms程度に設定する',
      '電極は自己心拍の心内波高値が1mV以下の箇所に留置する',
      'X線CTはペースメーカの誤作動を起こさない',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '植込み型ペースメーカについて正しいのはどれか。\na. 洞不全症候群（SSS）は適応疾患である \nb. NBG（ICHD）コードの4番目の文字Rは心拍応答機能を示す \nc. DDDペースメーカの電極リードは1本である \nd. ニッケル水素電池が用いられる \ne. ジェネレータはチタン合金製のケースに密封されている',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '冠動脈インターベンション治療について正しいのはどれか。',
    options: [
      '治療中の冠動脈造影は不要である',
      '治療中の血管内超音波診断装置の使用は禁忌である',
      'バルーン拡張圧は10気圧程度である',
      'ステント留置後の再狭窄はない',
      '補助循環装置の待機は不要である',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '正しい組合せはどれか。\na.内視鏡的癌治療  -------- ArFエキシマレーザ \nb.角膜形成術 -------- Nd:YAGレーザ \nc.網膜光凝固 -------- Arレーザ \nd.光線力学的治療 -------- Dyeレーザ \ne.尿路結石破砕 -------- CO2レーザ',
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
  /** 35回(AM) */
  {
    question:
      '電気メスについて正しいのはどれか。\na. 利用しているのはグロー放電である \nb. 凝固の出力波形は連続正弦波である \nc. 切開時の搬送波は10kHzである \nd. 高周波非接地形は対極板回路を接地より絶縁している \ne. モノポーラ出力使用時には対極板が必要である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '体外式除細動器で正しいのはどれか。\na. 二相性波形は半導体スイッチにより極性を反転する \nb. 出力パルス幅は2~5μsである \nc. 出力端子の一方は接地されている \nd. 通電テストには50Ωの無誘導抵抗を用いる \ne. 心房細動除去にはR波同期装置を用いる',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'シリンジポンプについて正しいのはどれか。\na. 自然滴下方式である \nb. 気泡混入検出機能がある \nc. 薬剤の精密注入に用いる \nd. サイフォニング現象が起こる \ne. 大量輸液を行う際に有用である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '経皮的冠動脈インターベンション治療(PCI)について正しいのはどれか。',
    options: [
      '体外式超音波診断装置を用いてカテーテルを誘導する',
      'バルーン拡張圧は100気圧程度である',
      '狭窄部拡張中の冠血流量は減少する',
      'ステント留置後の抗凝固療法は禁忌である',
      'ロータブレータはレーザを用いる',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '超音波吸引手術装置について正しいのはどれか。',
    options: [
      '先端は5~10mmの振幅で振動する',
      '25kHz前後の振動を用いる',
      '対極板が必要である',
      '生理食塩液は不要である',
      '骨切開に有用である',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
  /** 35回(PM) */
  {
    question: '使用エネルギーと治療法との組合せで正しいのはどれか。',
    options: [
      '熱  -------- PTCA',
      '電磁波 -------- VAD',
      '粒子線 -------- ESWL',
      '電流 -------- ICD',
      '超音波 -------- CHDF',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '電気メスについて正しいのはどれか。\na. 対極板の接触面積は10cm前後である \nb. ゲルパッド型は静電結合である \nc. 導電結合型対極板は、静電結合型よりも接触インピーダンスが高い \nd. 高周波漏れ電流の測定には200Ωの無誘導抵抗を使用する \ne. アクティブ電極と生体接触部のインピーダンスは400Ω前後である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'RFカテーテルアブレーションについて正しいのはどれか。\na. 徐脈性不整脈の治療に用いる \nb. X線透視装置は不要である \nc. カテーテル電極先端は300°C以上になる \nd. カテーテル電極から高周波電流を流す \ne. ペースメーカの誤作動を起こす',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      'ESWLによる結石破砕時に損傷の危険がある組織はどれか。\na. 肺 \nb. 腸 \nc. 肝臓 \nd. 腎臓 \ne. 筋肉',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.mte],
  },
  {
    question:
      '誤っている組合せはどれか。\na.光線力学的治療  -------- 半導体レーザ \nb.角膜形成術 -------- ArFエキシマレーザ \nc.網膜光凝固 -------- CO2レーザ \nd.内視鏡的癌治療 -------- Arレーザ \ne.尿路結石破砕 -------- Ho:YAGレーザ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.mte],
  },
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
    tags: [TAGS_TEXT.mte],
  },
  {
    question: '医療機器とその有害事象との組合せで適切でないのはどれか。',
    options: [
      'マイクロ波加温装置  -------- キャビテーション',
      '熱希釈式心拍出量計 -------- 不整脈',
      '経皮的酸素分圧モニタ -------- 水 疱',
      '電気メス -------- 熱 傷',
      'レーザメス -------- 眼傷害',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.mte],
  },
];
