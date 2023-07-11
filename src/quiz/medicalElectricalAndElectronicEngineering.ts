import { TAGS_TEXT } from '.';
import { QuizData } from '../../types/type';

export const medicalElectricalAndElectronicEngineering: QuizData[] = [
  /** 28回(AM) */
  {
    question:
      '無限に長いソレノイドに電流を流すとき正しいのはどれか。\na. 外部磁界と内部磁界の強さは等しい \nb. 外部磁界の方向はソレノイドの中心軸方向と平行である \nc. 内部磁界の方向はソレノイドの中心軸方向と直交する \nd. 内部磁界の強さは電流に比例する \ne. 内部磁界の強さは単位長さ当たりの巻数に比例する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'a + jb の偏角がπ/6radとなる。a,bの組合せはどれか。ただし、jは虚数単位である。',
    options: ['a=1 b=1', 'a=√2 b=1', 'a=√3 b=1', 'a=2 b=√2', 'a=2 b=√3'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しいのはどれか。\na. CMOS回路は消費電力が少ない \nb. LEDはpn接合の構造をもつ \nc. FETではゲート電圧でドレイン電流を制御する \nd. 接合型FETは金属-酸化膜-半導体の構造をもつ \ne. バイポーラトランジスタは電圧制御素子である',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '一次電池はどれか。\na. リチウムイオン電池 \nb. 太陽電池 \nc. 酸化銀電池 \nd. マンガン電池 \ne. ニッケル水素電池',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しい組合せはどれか。\na.ASK -------- 振幅偏移変調 \nb.PSK -------- パルス偏移変調 \nc.TDM -------- 波長分割多重 \nd.CDMA -------- パルス符号変調 \ne.FDM -------- 周波数分割多重',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'コンピュータの入出力インタフェースはどれか。',
    options: ['BASIC', 'CPU', 'JPEG', 'UNIX', 'USB'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '1画面100kbitで構成されるディジタル画像を伝送したい。通信回線の伝送速度が9Mbpsであるとき、1秒間に伝送できる画像の最大数はどれか。ただし、伝送時に圧縮符号化等の処理は行わず、画像構成データ以外のデータは無視する。',
    options: ['BASIC', 'CPU', 'JPEG', 'UNIX', 'USB'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '2つの2進数10.01と111.11との和を10進数で表したのはどれか。',
    options: ['9.50', '9.75', '10.00', '10.25', '10.50'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '-1Vから1Vの電圧を10bitの量子化ビット数でAD変換したときの分解能に最も近い電圧[mV]はどれか。',
    options: ['1', '2', '10', '100', '200'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  /** 28回(PM) */
  {
    question:
      '通信周波数 1.5 GHz帯の携帯電話が出す電磁波の波長[cm]に最も近いのはどれか。ただし、光速を3.0×10^8 m/sとする。',
    options: ['1', '2', '5', '10', '20'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '変圧器の200回巻きの1次側コイルに100Vの正弦波交流電圧を加えた。この変圧器の2次側コイルから50Vの電圧を取り出したい場合、2次側コイルの巻数[回]はどれか。ただし、変圧器は理想変圧器とする。',
    options: ['50', '100', '200', '500', '800'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '理想演算増幅器について正しいのはどれか。\na. 周波数帯域幅は無限大である \nb. 出力インピーダンスは無限大である \nc. 同相除去比(CMRR)はゼロである \nd. 入力端子に流れ込む電流はゼロである \ne. スルーレートは無担大である',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '差動増幅器の入力端子間に2mVを入力したとき、4Vの出力が得られた。この入力端子を短絡し、入力端子とアースの間に1Vを入力したとき、200mVの出力が得られた。この差動増幅器の同相除去比（CMRR)[dB]はどれか。',
    options: ['20', '40', '60', '80', '100'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '変調後の信号の振幅が変化する変調方式はどれか。',
    options: ['PWM', 'FM', 'PM', 'PAM', 'PCM'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '正しい組合せはどれか。',
    options: [
      'RAM -------- 制御装置',
      'OCR -------- 入力装置',
      'RAID -------- 演算装置',
      'タッチパネル  -------- 記憶装置',
      'USBフラッシュメモリ -------- 出力装置',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'オペレーティングシステムの役割について正しいのはどれか。\na. 患者情報データベースの検索 \nb. ファイルシステムの管理 \nc. 周辺装置の制御 \nd. 電子メールのウイルスチェック \ne. 画像ファイルの編集',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'コンピュータネットワークに関係する用語とその機能との組合せで正しいのはどれか。\na.DNS -------- IPアドレスとホスト名の変換 \nb.WPA -------- 広域ネットワーク \nc.HTML -------- インターネット上の資源の位置を表す識別子 \nd.HTTP -------- 光ファイパを用いたインターネット接続サービス \ne.SMTP -------- 電子メールの配送',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '-0～1kHzの帯域をもつアナログ信号をAD変換するとき、サンプリング定理によって決まるサンプリング間隔[ms]の上限はどれか。',
    options: ['0.2', '0.5', '0', '5', '2'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しいのはどれか。\na. 時系列信号の自己相関関数から信号の周期を知ることができる \nb. 時系列信号をフーリエ変換すると信号の周波数成分を知ることができる \nc. パワースペクトルから信号の位相情報を知ることができる \nd. 同じ基本周波数の矩形波とのこぎり波のパワースペクトルは等しい \ne. 正弦波の周波数を倍にするとパワースペクトルのパワーは4倍になる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  /** 29回(AM) */
  {
    question:
      '電磁波の発生源から距離15cmの地点で受ける電磁波のエネルギーをW1、22cmの地点で受ける電磁波のエネルギーをW2とするとき、W1/W2はどれか。',
    options: ['0.45', '0.68', '1.5', '2.2', '7'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '交流無停電電源装置（UPS）に利用されているのはどれか。\na. インバータ \nb. 検流計 \nc. ステッピングモータ \nd. 蓄電池 \ne. トランス',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '差動増幅器の入力端子に振幅1mVの逆相信号と振幅2Vの同相信号が入力された。出力では逆相信号が2Vに増幅され、同相信号が100mVに減衰した。この差動増幅器の同相除去比（CMRR）[dB]はどれか。ただし、log10 2 を0.3とする。',
    options: ['66', '72', '86', '92', '96'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しい組合せはどれか。\na. FSK -------- 振幅偏移変調 \nb. PWM -------- パルス幅変調 \nc. CDMA -------- 符号分割多重 \nd. TDM -------- 周波数分割多重 \ne. FDM -------- 波長分割多重',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '記憶装置について誤っているのはどれか。',
    options: [
      'RAMは記憶内容を変更することができる',
      'RAMは主記憶装置として使われる',
      'ROMは電源を切っても情報を保持する',
      'フラッシュメモリは揮発性メモリの一種である',
      'ハードディスクは情報を磁気的に記録する',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '使用しているパソコンで、コンピュータウィルス等の不正なソフトウェアが動作していると考えられる。使用しているパソコンの初動対応として最も適切なのはどれか。',
    options: [
      'パスワードを変更する',
      'ネットワークから切断する',
      'USBメモリにファイルをバックアップする',
      'システムソフトウェアのアップデートを行う',
      'ウイルス対策ソフトを用いてシステムのスキャンを行う',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '2つの2進数1100と11の積を2進数で表したのはどれか。',
    options: ['1111', '10100', '11100', '100100', '110100'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '0〜5Vの電圧を12bitで量子化するとき、分解能（量子化精度）[mV]に最も近いのはどれか。',
    options: ['0.6', '1.2', '4.9', '9.8', '19.5'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '-√3+j/1+j√3の偏角はどれか。ただし、jは虚数単位である。',
    options: ['-π/2', '-π/6', '0', 'π/2', 'π/6'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  /** 29回(PM) */
  {
    question:
      '2つのコイル間の相互インダクタンスが0.5Hのとき、一方のコイルの電流が1msの間に10mAから12mAに変化すると、他方のコイルに生じる誘導起電力の大きさ[mV]はどれか。',
    options: ['50', '100', '250', '500', '1000'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '開放電圧が9.0V、内部抵抗が20Ωの電池に負荷抵抗を接続すると300mAの電流が流れた。負荷抵抗の大きさ[Ω]はどれか。',
    options: ['2', '6', '10', '20', '30'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '電源電圧100Vの正弦波交流電源に医療機器を接続したところ、2Aの電流が流れ、40Wの電力が消費された。この医療機器の力率はどれか。',
    options: ['0.3', '0.5', '0.7', '1', '1.4'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '振幅変調において信号v（t）= 3sin（2000πt）で1000kHzの搬送波を変調するとき、被変調波の上下側波の周波数[kHz]はどれか。ただし、時間tの単位は秒とし、過変調は生じないものとする。',
    options: ['980と1020', '990と1010', '997と1003', '998と1002', '999と1001'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'コンピュータの入出力インタフェースでないのはどれか。',
    options: ['RS-232C', 'USB', 'RAID', 'IEEE1394', 'シリアルATA'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しい組合せはどれか。\na.CSMA/CD -------- 電子メール \nb.HTTP -------- イーサーネット \nc.FTP -------- ファイル転送 \nd.TCP/IP -------- インターネット \ne.SMTP/POP -------- ウェブページ',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '帯域が50Hz〜4kHzの音声信号をAD変換して伝送する。量子化ビット数を12bitとするとき、最低限必要な伝送速度[kbps]はどれか。ただし、圧縮符号化は行わず、音声以外のデータは無視する。',
    options: ['48', '64', '96', '128', '160'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '時系列信号の解析手法とその目的との組合せで誤っているのはどれか。',
    options: [
      '加算平均 -------- SN比の改善',
      '自己相関関数 -------- 周期的成分の抽出',
      'フーリエ変換 -------- 周波数スペクトルの分析',
      '移動平均  -------- 高周波成分の除去',
      '2乗平均 -------- 微分波形の抽出',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  /** 30回(AM) */
  {
    question:
      '10Hのインダクタンスをもつコイルに1Aの電流が流れているとき、磁界内に蓄えられているエネルギー[J]はどれか。',
    options: ['1', '2', '5', '10', '50'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正弦波交流 i1=141sin(100 πt+π/3)[A]、i2=282sin(100πt-π/6)[A]において、i1とi2の位相差[rad]について正しいのはどれか。',
    options: [
      'i1がi2よりπ/6進んでいる',
      'i1がi2よりπ/2進んでいる',
      'i1がi2より2π/3遅れている',
      'i1がi2よりπ/6遅れている',
      'i1がi2よりπ/2遅れている',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しいのはどれか。\na. 理想ダイオードの順方向抵抗は無限大である \nb. バイポーラトランジスタは電圧制御素子である \nc. ピエゾ効果が大きい半導体は磁気センサに利用される \nd. FETのn形チャネルの多数キャリアは電子である \ne. CMOS回路はバイポーラトランジスタ回路よりも消費電力が少ない',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 5,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '同相除去比(CMRR)が80dBの差動増幅器の入力に、振幅1mVの逆相信号を入力したところ、出力において逆相信号の振幅は1Vに増幅された。このとき、この増幅器の同相信号に対する利得[dB]はどれか。',
    options: ['-40', '-20', '0', '20', '40'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'コンピュータの補助記憶装置について誤っているのはどれか。',
    options: [
      'USBメモリはフラッシュメモリである',
      '1層あたりの容量は、BD(Blu-ray Disk)はDVDの5倍以上である',
      'RAIDはデータ圧縮技術を基本としている',
      'NASはネットワークに直接接続して使用する',
      '磁気テープは大量データの長期保存に使われる',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'インターネットからの不正アクセスを防ぐため、インターネットとローカルネットワーク間に設置する仕組みはどれか。',
    options: [
      'スイッチングハプ',
      'リピータ',
      'ウィルスチェッカ',
      'ファイアウォール',
      '電子認証システム',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '16進数B8と9Cの和を16進数で表したのはどれか。',
    options: ['DC', '144', '154', '22F', '340'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '画素数が800X1000のモノクロ画像を128段階の濃度で表示するために必要な最小データ量[Mbyte]に最も近いのはどれか。',
    options: ['0.7', '1.2', '2.1', '2.4', '12.8'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  /** 30回(PM) */
  {
    question:
      '変圧器の1次側に1Aの正弦波電流を流すと、2次側抵抗10Ωの両端に5Vの電圧が生じた。1次側コイルの巻数が100回であるとき、2次側コイルの巻数は何回か。ただし、変圧器は理想変圧器とする。',
    options: ['20', '100', '200', '1000', '2000'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '2kHzまでの周波数成分をもつ信号をAM変調し、周波数分割多重によって多チャネル同時通信する。同時に20チャネルの信号を伝送するとき、通信で占有する周波数帯域の合計帯域幅[kHz]はどれか。ただし、AM変調では両側波帯の信号成分を送るものとする。',
    options: ['20', '40', '80', '160', '320'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'フラッシュSSD(Solid State Drive)について誤っているのはどれか。\na. 揮発性半導体メモリが用いられている \nb. データの消去や書き込みによって素子が劣化する \nc. ハードデイスクよりも静粛性に優れる \nd. ハードデイスクよりも耐衝撃性に優れる \ne. ハードデイスクよりも読み出しが低速である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'プログラミング言語でないのはどれか。',
    options: ['C++', 'Android', 'Java', 'Python', 'Ruby'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '標的型攻撃メールによる被害を防ぐ方策として効果がないのはどれか。',
    options: [
      '電子署名の利用',
      'Webメールの利用',
      '利用者の教育・訓練',
      'ウィルス対策ソフトの導入',
      'ソフトウェアアップデートの実行',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '10～70Hzの周波数成分から構成されるアナログ信号をAD変換する。サンプリング周波数[Hz]の下限はどれか。',
    options: ['10', '20', '40', '70', '140'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '電力Aの信号に電力Bの雑音が重畳しているとき、SN比[dB]はどれか。',
    options: [
      '10log10(B/A)',
      '20log10(B/A)',
      'log(A/B)',
      '10log10(A/B)',
      '20log10(A/B)',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  /** 31回(AM) */
  {
    question:
      '一様な電界に置かれた導体について正しいのはどれか。ただし、真空中とする。\na. 導体表面に電荷が現れる \nb. 導体内の電界の大きさは0となる \nc. 導体内の自由電子は電界の方向へ移動する \nd. 導体内では誘電分極が起こる \ne. 電界の方向は導体表面との接線方向となる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '無限に長い直線導体に6.28Aの電流が流れているとき、導体から1.00m離れた位置の磁界の強さ[A/m]に最も近いのはどれか。',
    options: ['0.1', '0.3', '1', '6', '10'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '起電力50V、内部抵抗5Ωの電池に負荷抵抗Rを接続する。Rを調節してRでの消費電力を最大にしたときのRの消費電力[W]はどれか。',
    options: ['25', '50', '125', '250', '500'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しいのはどれか。\na. LEDの発光強度は加えた電圧に比例する \nb. LEDの発光波長は流した電流に比例する \nc. LEDの順方向電圧は整流用ダイオードよりも高い \nd. フォトダイオードの出力電流はアノードから流出する方向に流れる \ne. フォトダイオードの出力電流は入射光が強くなると増加する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '時分割多重方式(TDM)において、19200bpsの伝送路で4チャネルの信号を通信したい。各チャネルの伝送速度の最大値[byte/s]はどれか。ただし、各チャネルの伝送速度は同一とする。',
    options: ['300', '600', '2400', '4800', '19200'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'コンピュータの入出力インタフェースについて正しいのはどれか。',
    options: [
      'IEEE1394は無線LANの規格である',
      'USBはパラレルインタフェースである',
      'USBのデータ転送速度はRS-232Cよりも速い',
      'シリアルATAは複数のコンピュータ間の通信に使用される',
      'HDMIはコンピュータとハードディスクの接続に使用される',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '0S(オペレーティングシステム)の役割でないのはどれか。',
    options: [
      'メールの管理',
      'プロセスの制御',
      'メモリの管理',
      'ユーザインタフェースの提供',
      'ファイルシステムの管理',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'ランサムウェア対策として効果がないのはどれか。',
    options: [
      'ファイルはすべて暗号化して保存する',
      '不審な添付ファイルのついたメールは削除する',
      'ウイルス対策ソフトの定義ファイルを更新する',
      '0Sを更新し脆弱性を解消する',
      '重要なファイルは定期的にバックアップしておく',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '16進数の減算、C8-4Aの結果を16進数で表したのはどれか。',
    options: ['78', '7E', '87', '88', '8E'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '移動平均法を使用する目的はどれか。',
    options: [
      '変動を軽減して平滑化する',
      '周期的な信号を検出する',
      '波形の尖鋭度を求める',
      '特定区間の面積を求める',
      '周波数成分を求める',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  /** 31回(PM) */
  {
    question:
      'インダクタに流れる電流を1s間に0.1Aから0.2Aに一定の割合で増加させたところ、1Vの誘導起電力が生じた。このときの、自己インダクタンス[H]はどれか。',
    options: ['0.1', '0.5', '1', '5', '10'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '出力500Wの電熱器で、20℃の水100gを温めたとき、60℃になるまでのおよその時間[s]はどれか。ただし、電熱器の出力はすべて水の温度上昇に使われるものとし、水の比熱は、4.2×10^3J/(kg･K)とする。',
    options: ['17', '34', '50', '67', '84'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'キャパシタに正弦波電圧を印加した場合、キャパシタの両端にかかる電圧と流れる電流との位相について正しいのはどれか。',
    options: [
      '電圧は電流よりπ/2位相が遅れている',
      '電圧は電流よりπ/4位相が遅れている',
      '電圧は電流と同位相である',
      '電圧は電流よりπ/4位相が進んでいる',
      '電圧は電流よりπ/2位相が進んでいる',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '抵抗変化を利用する素子はどれか。\na. サーミスタ \nb. CdS \nc. ホール素子 \nd. 熱電対 \ne. 圧電素子',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '差動増幅器の入力端子に振幅0.5mVの逆相信号と振幅1Vの同相信号が入力された。出力では逆相信号が1Vに増幅され、同相信号が10mVに減衰した。この差動増幅器の同相除去比(CMRR)[dB]はどれか。ただし、log102は0.3とする。',
    options: ['66', '86', '92', '96', '106'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'コンピュータの構成要素で正しい組合せはどれか。',
    options: [
      'OCR -------- 入力装置',
      'RAM -------- 制御装置',
      'RAID -------- 演算装置',
      'タッチパネル  -------- 記憶装置',
      'USBフラッシュメモリー -------- 出力装置',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'コンピュータネットワークに関係する用語と説明との組合せで誤っているのはどれか。',
    options: [
      'TCP/IP -------- インターネットで用いられる標準プロトコル',
      'FTP -------- ファイル転送のためのプロトコル',
      'HTTPS -------- 通信内容を暗号化したHTTPプロトコル',
      'SMTP -------- ネットワーク管理のためのプロトコル',
      'POP -------- 電子メールをサーバから取得するためのプロトコル',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '文字Aをアスキーコードで表すと16進数で41である。文字Jを表すアスキーコードはどれか。',
    options: ['49', '4A', '4B', '50', '51'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '帯域が1～100Hzの信号を量子化ビット数8bitでAD変換する。5秒間の信号を記録するのに最小限必要な容量[byte]はどれか。ただし、圧縮符号化は行わず、信号以外のデータは無視する。',
    options: ['500', '1000', '2000', '4000', '8000'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '(1十j)(√3-j)の絶対値はどれか。ただし、jは虚数単位である。',
    options: ['2', '2√2', '2√3', '2√3-2', '8'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  /** 32回(AM) */
  {
    question:
      '電界効果トランジスタ(FET)について誤っているのはどれか。\na. MOS-FETは金属-酸化膜-半導体の構造をもつ \nb. FETはユニポーラトランジスタである \nc. FETのn形チャネルのキャリアは正孔である \nd. FETではゲート電流でドレイン電流を制御する \ne. FETは高入カインピーダンス素子である',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しい組合せはどれか。\na. PSK -------- 位相偏移変調 \nb. FSK -------- 周波数分割多重 \nc. PWM -------- パルス振幅変調 \nd. PPM -------- パルス幅変調 \ne. PCM -------- パルス符号変調',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'パーソナルコンピュータのメモリの種類とその用途について正しい組合せはどれか。',
    options: [
      'DRAM -------- メインメモリ',
      'EEPROM -------- RAID',
      'フラッシュメモリ -------- CPUのキャッシュメモリ',
      'マスクROM -------- SSD',
      'SRAM -------- 読出し専用メモリ',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'コンピュータで問題を解くための手順を表す用語はどれか。',
    options: [
      'モデリング',
      'アルゴリズム',
      'コンパイル',
      'コーディング',
      'デバッグ',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '2つの16進数A8と2Bの和を2進数で表したのはどれか。',
    options: ['11000011', '11001001', '11001010', '11010011', '11011001'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '各ピクセルの濃度が210=1024階調、1フレームの画像の大きさが4000×2000ピクセル、1秒間に50フレームのグレースケール動画像を、伝送速度40 Mbps の伝送路で滞留なく伝送したい。デー夕量は少なくとも何分の1に圧縮しなければならないか。',
    options: ['1/10', '1/50', '1/100', '1/500', '1/1000'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '画像データの圧縮法について誤っているのはどれか。',
    options: [
      '可逆圧縮ではデータの冗長性を利用して圧縮を行う',
      '可逆圧縮では元の画質に復元できる',
      '非可逆圧縮では人間の視覚特性を利用している',
      '非可逆圧縮では圧縮率を上げると画像が劣化する',
      '可逆圧縮は非可逆圧縮より圧縮率を高くすることができる',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'AD変換について誤っているのはどれか。',
    options: [
      '標本化した信号を量子化する',
      '標本化周波数は信号に含まれる最高周波数の2倍以上必要である',
      '標本化周波数が低すぎると折り返し雑音が起こる',
      '量子化の分解能を上げるには量子化ビット数を増やす',
      '量子化雑音を低減するには標本化周波数を高くする',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  /** 32回(PM) */
  {
    question:
      '直径4mmで長さ1mの金属導体がある。この導体の長さを変えずに直径を2mmにしたとき、抵抗値はもとの何倍か。',
    options: ['1/4', '1/2', '1', '2', '4'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'RLC直列回路において共振時の電気インピーダンスの大きさはどれか。ただし、ωは共振角周波数とする。',
    options: ['R', '1/ωC', 'ωL', 'ωL+1/ωC', '1/√LC'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '直流電動機(モータ)に直流電圧20Vを加えたところ、100 mAの電流が流れ定常回転した。このモータを10分間回した時の消費エネルギー[J]はどれか。',
    options: ['240', '1200', '2400', '12000', '24000'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '起電力を生じるデバイスはどれか。\na. 有機EL \nb. CdS \nc. サーミスタ \nd. ホール素子 \ne. 熱電対',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'プログラミング言語はどれか。',
    options: ['Android', 'DICOM', 'Java', 'GUI', 'Linux'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '外部からの不正アクセスを防ぐ目的で、インターネットと内部のネットワークやシステムの間に置く仕組みはどれか。',
    options: [
      'スイッチングハプ',
      'ウイルスチェッ力',
      'ファイアウオール',
      'SSL(Secure Sockets Layer)',
      'スパイウェア',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '帯域が1～200Hzのアナログ信号をサンプリングするとき、エイリアシングを起こさないサンプリング間隔の最大値[ms]はどれか。',
    options: ['1', '1.25', '2.5', '5', '10'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '実効値10Vの信号に実効値1Vの雑音が重畳しているとき、SN比[dB]はどれか。',
    options: ['-20', '-10', '0', '10', '20'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  /** 33回(AM) */
  {
    question:
      '理想演算増幅器について正しいのはどれか。\na. 周波数帯域幅は無限大である \nb. 出力インピーダンスは無限大である \nc. 同相除去比（CMRR）はゼロである \nd. 入力端子に流れ込む電流はゼロである \ne. スルーレートは無限大である',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '素子自体が発光しないのはどれか。\na. CCD \nb. 有機 EL \nc. プラズマディスプレイ \nd. LED \ne. 液 晶',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '信号 v（t）= 10sin（4000 πt）で1000 kHz の搬送波を AM 変調するとき、被変調波の上側波の周波数[kHz]はどれか。ただし、時間tの単位は秒とし、過変調は生じないものとする。',
    options: ['1001', '1002', '1004', '1008', '1010'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '複数のハードディスクドライブをまとめて一台のドライブとして扱い、読み書きの高速化や耐障害性を持たせた装置はどれか。',
    options: ['RAID', 'DRAM', 'OCR', 'CPU', 'SSD'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '医用画像の伝送、蓄積、取得などに関する国際規格の名称はどれか。',
    options: ['DICOM', 'HIS', 'HL7', 'PACS', 'RIS'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '静止画像に使われるフォーマットはどれか。\na. ASCII \nb. JPEG \nc. PNG \nd. MPEG \ne. Unicode',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '1枚1Mbyte のディジタル画像を1秒間に100枚伝送したい。最低限必要な伝送速度はどれか。ただし、画像以外のデータは無視し、圧縮符号化は行わないものとする。',
    options: ['1Mbps', '10Mbps', '100Mbps', '1Gbps', '10Gbps'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  /** 33回(PM) */
  {
    question:
      '正しいのはどれか。\na. 理想ダイオードの逆方向抵抗はゼロである \nb. ユニポーラトランジスタは電流制御素子である \nc. ピエゾ効果が大きい半導体は磁気センサに利用される \nd. 接合型 FETのn形チャネルの多数キャリアは電子である \ne. CMOS回路はバイポーラトランジスタ回路よりも消費電力が少ない',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '信号に対応して搬送波の振幅が変化するパルス変調はどれか。',
    options: ['PAM', 'PFM', 'PNM', 'PPM', 'PWM'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '記憶装置について誤っているのはどれか。',
    options: [
      'フラッシュメモリは揮発性メモリの一種である',
      'ハードディスクは情報を磁気的に記録する',
      'RAMは記憶内容を変更することができる',
      'RAMは主記憶装置として使われる',
      'ROMは電源を切っても情報を保持する',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'IPアドレスについて誤っているのはどれか。',
    options: [
      'IPv4は8ビットごとに192.168.100.1のように表記している',
      'ネットワークアドレス部とホストアドレス部で構成される',
      'グローバルIPアドレスは各国の政府機関で管理されている',
      'LAN内のみで使えるアドレスをプライベートIPアドレスという',
      '枯渇に対応して128ビットのIPv6への移行が進められている',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '正しいのはどれか。',
    options: [
      'データのバックアップは情報漏洩の防止に役立つ',
      '共通鍵暗号方式では鍵が漏れてもセキュリティ上題ない',
      '情報セキュリティにおける完全性とは、情報が正確で改ざんされていないことをいう',
      'オープンソースソフトウェアは、セキュリティ確保のためには使用すべきではない',
      '院内ネットワークにファイアウォールが導入されていれば、個人のPCを自由に接続してもいい',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '-1Vから+1Vの電圧を量子化ビット数10bitでAD変換する。電圧の分解能[mV]に最も近いのはどれか。',
    options: ['1', '2', '4', '8', '16'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '(1-j)^4と等しいのはどれか。ただし、jは虚数単位である。',
    options: ['-4', '-2', '0', '2', '4'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  /** 34回(AM) */
  {
    question:
      '真空中に1C（クーロン）の点電荷Aと2Cの点電荷Bが1mの距離で存在する。正しいのはどれか。',
    options: [
      ' Bの受ける力は、Aの受ける力の2倍である',
      'Bの受ける力の方向は、A、Bを結ぶ直線に垂直である',
      'A、B間の距離を 0.5mにすると、Bの受ける力は2倍になる',
      'Aの電荷量を2倍にすると、A及びBの受ける力は2倍になる',
      'A及びBの電荷量を両方とも2倍にしても、Aの受ける力は変わらない',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '磁気の性質について正しいのはどれか。',
    options: [
      '無限に長いソレノイドでは内部の磁束密度は一様である',
      '有限長のソレノイドでは外部に一様な磁界が存在する',
      '一回巻き円形コイルの中心における磁界の大きさは、円形コイルの半径の2乗に反比例する',
      '直線電流によって生じる磁界の大きさは、電流からの距離の2乗に反比例する',
      '永久磁石に使用する磁性体の比透磁率は約1である',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '20℃の水100gが入った保温ポットに電気抵抗42Ωのニクロム線を入れて直流1Aを10秒間通電した。水の温度上昇[℃]はどれか。 ただし、比熱を 4.2J・g-1・K-1とする。',
    options: ['1', '4.2', '10', '18', '42'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '正しいのはどれか。',
    options: [
      'ホール効果が大きい半導体は磁気センサに利用される',
      'ダイオードのアノードにカソードよりも高い電圧を加えると電流は順方向に流れる',
      'p形半導体の多数キャリアは電子である',
      'MOSFETの入力インピーダンスはバイポーラトランジスタに比べて小さい',
      '金属の導電率は温度が高くなると増加する',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'LEDについて正しいのはどれか。\na. 発光強度は流した電流に比例する \nb. 2 つの端子に極性はない \nc. 発光効率は白熱電球と同等である \nd. 発光波長は使用する半導体材料により異なる \ne. 電流と電圧の関係は指数関数にしたがう',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '振幅変調について誤っているのはどれか。',
    options: [
      '搬送波に正弦波が用いられる',
      '占有帯域幅は変調波の周波数成分で決まる',
      '半波整流回路で復調できる',
      '変調度は1以下に設定する',
      '周波数変調に比べ雑音に強い',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '画像処理に特化して設計された装置はどれか。',
    options: [
      'GPU（Graphics Processing Unit）',
      'VGA（Video Graphics Array）',
      'ALU（Arithmetic Logic Unit）',
      'MMU（Memory Management Unit）',
      'GUI（Graphical User Interface）',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '情報セキュリティは機密性、完全性、可用性の3つの基本概念で整理できる。可用性を高めるのはどれか。',
    options: [
      '電子署名の使用',
      '2段階認証の使用',
      'ファイルの暗号化',
      'ハードウェアの二重化',
      '廃棄メディアの細断処理',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '非可逆圧縮が使用されるのはどれか。\na. 音声データ \nb. 静止画データ \nc. 動画データ \nd. 機械語コード \ne. テキストデータ',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '2進数01010101を3倍した2進数はどれか。',
    options: ['10000000', '10101010', '10101101', '11101110', '11111111'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '帯域が1〜100Hzのアナログ信号をサンプリングするとき、エイリアシングを起こさないサンプリング間隔の最大値[ms]はどれか。',
    options: ['1.25', '2.5', '5', '10', '20'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '一次遅れ系の伝達関数G(s)=K/1+TsにおけるKをゲイン定数、Tを時定数という。H(s)=K/12s+3のゲイン定数はどれか。 ただし、s をラプラス変換の演算子とする。',
    options: ['3', '4', '6', '12', '18'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  /** 34回(PM) */
  {
    question:
      'シールドについて正しいのはどれか。\na. フェライトは磁気シールド材として用いられる \nb. 真空にすると電気力線は遮断される \nc. 磁力線を遮断するには誘電体が適している \nd. 同軸ケーブルは静電シールドの機能をもっている \ne. 電磁波をシールドするには導電率の大きな材料が適している',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '100Vの電圧を加えると5Wの電力を消費する抵抗器に、0.2Aの電流を流したときの消費電力[W]はどれか。',
    options: ['4', '20', '25', '80', '400'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '複素数の偏角が-4/π radとなるのはどれか。ただし、jは虚数単位である。',
    options: ['1+j', '1-j', '1+2j', '1-2j', '2+√3j'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '19200bpsの伝送路で時分割多重通信方式（TDM）により複数チャネルを同時通信する場合、全てのチャネルが300byte/s以上の伝送速度を確保可能な チャネル数の最大値はどれか。',
    options: ['1', '2', '4', '8', '16'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'CPUについて誤っているのはどれか。',
    options: [
      '演算ユニット、制御ユニット、一時記憶ユニットから構成される',
      '主記憶装置から命令を読込んで解読し、実行する',
      'マルチコアCPUでは複数の処理を並列に実行することができる',
      '64ビットCPUでは一度に処理するデータ長が64ビットである',
      'CPUの構造が同じであれば、クロック周波数が低いほど処理速度が速い',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '標的型攻撃メールの特徴について誤っているのはどれか。',
    options: [
      '特定組織（官公庁、企業、医療機関等）の機密情報の窃取を目的とする',
      '件名、本文、添付ファイル名を業務に関連したものに偽装する',
      '本文や添付ファイルに記載したリンク先にウイルスを仕込む',
      '組織が頻繁に利用するウェブサイトを改ざんしウイルスを仕込む',
      '大量のスパムメールを不特定多数に送信する',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '16 進数の減算4A-25の結果を10進数で表したのはどれか。',
    options: ['19', '25', '31', '37', '49'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  /** 35回(AM) */
  {
    question:
      '静電容量C[F]のコンデンサに電荷Q[C]が蓄えられたとき、静電エネルギーWの単位[J]の組み立て単位はm^2k9/s^2',
    options: [
      'm^2kg/S^2A^2',
      'm^2kg/S^4A^2',
      'S^2A^2/m^2kg',
      'm^2A^2/kgS^2',
      'S^4A^2/m^2kg',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '帯電している導体球が真空中におかれている。正しいのはどれか。ただし、導体には電流は流れておらず、すべての電荷が静止しているものとする。',
    options: [
      '導体表面は等電位面である',
      '導体内部には一様な電荷が存在する',
      '導体内部には同心円状に電界が存在する',
      '導体内部から放射状に電気力線が出入りする',
      '導体球に帯電体を近づけると導体内部に電位差が生じる',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '抵抗変化を利用した温度センサとして用いられるのはどれか。\na. CdS \nb. サーモパイル \nc. サーミスタ \nd. 白金 \ne. 熱電対',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '周波数150MHzの電波を最も効率よく受信できるアンテナの長さ[m]はどれか。',
    options: ['0.5', '2.0', '3.0', '4.0', '5.0'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '2進数を16進数に変換するとき、最下位桁から何桁ごとに区切って変換すればよいか。',
    options: ['2', '3', '4', '5', '6'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'パーソナルコンピュータの主記憶装置に用いられるのはどれか。',
    options: ['HDD', 'SSD', 'CD-ROM', 'DRAM', 'DVD-RAM'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'コンピュータネットワークに関係する用語と説明との組合せで誤っているのはどれか。',
    options: [
      'TCP/IP -------- インターネットで用いられる標準プロトコル',
      'FTP -------- ファイル転送のためのプロトコル',
      'HTTPS -------- 通信内容を暗号化したHTTPプロトコル',
      'SMTP  -------- ネットワーク管理のためのプロトコル',
      'POP -------- 電子メールをサーバから取得するためのプロトコル',
    ],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'ハブやスイッチなどの集線装置を中心に、複数台の情報機器を接続するネットワークトポロジーはどれか。',
    options: ['バス型', 'スター型', 'リング型', 'ピアツーピア型', 'メッシュ型'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'コンピュータのロックやファイルの暗号化を引き起こし、復元を条件に金銭を要求するマルウェアはどれか。',
    options: [
      'ワーム',
      'ボット',
      'トロイの木馬',
      'スパイウェア',
      'ランサムウェア',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '患者管理や検査報告など、医療情報交換のための標準規約はどれか。',
    options: ['DICOM', 'HL7', 'MFER', 'PACS', 'RIS'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '生体をシステムとしてみたときの特徴について誤っているのはどれか。',
    options: [
      'フィードバック制御系を持つ',
      '広い範囲で入力と出力が比例する',
      '機能不全の一部を補完する能力がある',
      '環境からの外乱に適応する能力がある',
      '学習により性能を向上させることができる',
    ],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  /** 35回(PM) */
  {
    question:
      '+1C-1Cの点電荷の間に働く引力は、電荷間の距離が2×10^-2mのとき、1×10^-2mの場合に比べて何倍となるか。',
    options: ['2', '1', '1/2', '1/4', '1/8'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '巻数20回のコイルを貫く磁束が3秒間に0.5Wbから2.0Wbまで一定の割合で変化した。コイルに発生する電圧[V]はどれか。',
    options: ['5', '10', '40', '75', '90'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '正しいのはどれか。\na. 理想ダイオードの順方向抵抗は無限大である \nb. バイポーラトランジスタは電圧制御素子である \nc. ピエゾ効果が大きい半導体は磁気センサに利用される \nd. FETのnチャネルの多数キャリアは電子である \ne. CMOS回路はバイポーラトランジスタ回路よりも消費電力が少ない',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '同相利得が20dB、同相除去比(CMRR)が100dBの差動増幅器の差動利得[dB]はどれか。',
    options: ['60', '70', '80', '90', '100'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '信号波の振幅に応じてパルス波の幅(デューティ比)を変化させる変調方式はどれか。',
    options: ['PAM', 'PWM', 'PPM', 'PCM', 'PFM'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '1ピクセルが赤、緑、青の各色256階調で構成されている縦1024ピクセル、横1024ピクセルのカラー画像1枚のデータ量[MByte]はどれか。ただし、画像以外のデータは無視し、圧縮符号化は行わないものとする。',
    options: ['1', '3', '24', '256', '768'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'クライアントサーバシステムについて誤っているのはどれか。',
    options: [
      'サービスを提供する側をサーバという',
      'サーバの障害はシステム全体に影響する',
      'クライアントの増加はサーバの負荷を軽減させる',
      'Webブラウザはクライアントソフトである',
      '電子メールの配送はメールサーバが行う',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '施設内でUSBメモリを使用する際のリスクに該当しないのはどれか。',
    options: [
      '紛失',
      '情報の不正持ち出し',
      '故障による情報消失',
      '不正ソフトウェアの持ち込み',
      'フィッシングによる情報漏洩',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'バイオメトリクス認証はどれか。\na. 指紋で認証する \nb. ワンタイムパスワードで認証する \nc. 画面に表示された9点の一部を一筆書きで結ぶ \nd. 「秘密の質問」に答える \ne. 虹彩パターンで認証する',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 1,
    tags: [TAGS_TEXT.meee],
  },
  /** 36回(AM) */
  {
    question: '半導体の性質として正しいのはどれか。',
    options: [
      'n型半導体の自由電子と正孔の数は等しい',
      'p型半導体の多数キャリアは自由電子である',
      '真性半導体ではどんな温度でも自由電子が存在しない',
      '真性半導体に自由電子を供給する不純物をアクセプタという',
      '共有結合から自由電子が移動して空になった部分を正孔という',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '16進数B8と9Cの和を16進数で表したのはどれか。',
    options: ['154', '1E4', '220', '244', '340'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '正しい組合せはどれか。',
    options: [
      'オペレーティングシステム -------- Safari',
      'アプリケーションソフトウェア -------- Android',
      'プログラミング言語 -------- Python',
      'データベース管理システム  -------- JavaScript',
      'Webブラウザ -------- mySQL',
    ],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'サーバとその役割との組合せで正しいのはどれか。\na.SMTPサーバ -------- Webアプリケーションの提供 \nb.DNSサーバ -------- ファイルの転送 \nc.FTPサーバ -------- ドメイン名のIPアドレスへの変換 \nd.Webサーバ -------- HTMLファイルの公開 \ne.DBサーバ -------- データベースの一元管理',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'Webサイトに短時間に大量にアクセスし、過負荷を与えることでサービスを停止させるのはどれか。',
    options: [
      'DoS攻撃',
      'ランサムウェア',
      'フィッシング',
      'インジェクション攻撃',
      '標的型攻撃',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '病院情報システムについて誤っているのはどれか。\na. システムを利用するためには医師の許可が必要である \nb. 診療情報を印刷して保存することが規定されている \nc. 透析支援システムは部門システムである \nd. クラウド型の電子カルテシステムが認められている \ne. 医師の指示はオーダエントリーシステムに記録される',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  /** 36回(PM) */
  {
    question:
      '正しいのはどれか。\na. 同軸ケーブルの特性インピーダンスは、ケーブルの長さに関係しない \nb. 導線周りの磁束が変化すると、電界が導線に誘導される \nc. 2.45GHzの電磁波の波長はおよそ12cmである \nd. 電磁波の速さは真空の誘電率と透磁率の乗算に比例する \ne. 直流電流に比例した電力の電磁波が発生する',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '電子部品について正しいのはどれか。\na. ピエゾ素子は磁束密度を検出する \nb. CdSは光を受けると起電力が発生する \nc. フォトダイオードは受光量に関係なく一定電流が流れる \nd. オペアンプは多数のトランジスタで構成されている \ne. ツェナーダイオードは一定の電圧を得るために用いる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      'AD変換について正しいのはどれか。\na. フラッシュ型AD変換器は高速変換に不向きである \nb. 量子化ビット数を増やすと量子化誤差が小さくなる \nc. 10kHzの信号を20kHzより低い周波数で標本化すると、元の信号を復元できない \nd. 多チャンネル同時AD変換には、標本化保持（サンプルホールド）回路を用いる \ne. LSBに対応した電圧が大きいほど量子化誤差が小さい',
    options: ['a b c', ' a b e', 'a d e', 'b c d', 'c d e'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '輝度分解能が8bitで、画素数10,000×10,000で構成された画像がある。この画像10枚を1Gbpsの伝送路で伝送するために必要な最短時間[s]はどれか。ただし、伝送時に圧縮符号化等の処理を行わず、画像構成データ以外のデータは無視する。',
    options: ['0.1', '0.8', '1', '8', '10'],
    answerIndex: 3,
    tags: [TAGS_TEXT.meee],
  },
  {
    question:
      '病院内にある業務システムを、インターネット上でソフトウェアを利用するクラウドサービスSaaS（Software as a Service）に移行する際の利点はどれか。\na. 導入時の費用負担だけで済む \nb. 保守・管理業務の負担が少なくなる \nc. 導入後の利用量の増大に対応しやすい \nd. カスタマイズの自由度が増える \ne. ネットワーク障害に強くなる',
    options: ['a b', 'a e', 'b c', 'c d', 'd e'],
    answerIndex: 2,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '情報セキュリティ対策に使われるファイアウォールの機能はどれか。',
    options: [
      '外部ネットワークと内部ネットワーク間で特定の通信だけを許可する',
      '脆弱性が発見された内部システムのソフトウェアを自動更新する',
      '内部ネットワークへの接続時にパスワードを要求する',
      '通信パケットに含まれるウイルスを駆除する',
      '暗号化された通信だけを許可する',
    ],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: '医用画像の保存や通信に使用する規格はどれか。',
    options: ['DICOM', 'POP3', 'MFER', 'ICD-11', 'HL7'],
    answerIndex: 0,
    tags: [TAGS_TEXT.meee],
  },
  {
    question: 'システムの伝達特性でないのはどれか。',
    options: [
      '時定数',
      'ゲイン',
      'ステップ応答',
      'インパルス応答',
      'ナイキスト周波数',
    ],
    answerIndex: 4,
    tags: [TAGS_TEXT.meee],
  },
];
