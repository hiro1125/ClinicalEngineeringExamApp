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
];
