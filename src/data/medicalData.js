export const medicalSystems = [
  { value: 'internal', label: '内科系' },
  { value: 'surgery', label: '外科系' },
  { value: 'other', label: 'その他' }
];

export const medicalData = {
  // 内科系
  m_endocrinology: { system: 'internal', label: '内分泌内科', diseases: ["糖尿病", "甲状腺疾患", "脂質異常症"] },
  m_nephrology: { system: 'internal', label: '腎臓内科', diseases: ["慢性腎臓病", "IgA腎症", "ネフローゼ症候群"] },
  m_hematology: { system: 'internal', label: '血液内科', diseases: ["白血病", "悪性リンパ腫", "貧血"] },
  m_respiratory: { system: 'internal', label: '呼吸器内科', diseases: ["気管支喘息", "COPD", "間質性肺炎", "睡眠時無呼吸症候群"] },
  m_gastro: { system: 'internal', label: '消化器内科', diseases: ["逆流性食道炎", "胃潰瘍", "大腸ポリープ", "感染性腸炎"] },
  m_hepatology: { system: 'internal', label: '肝臓内科', diseases: ["B型肝炎", "C型肝炎", "肝硬変"] },
  m_cardiology: { system: 'internal', label: '循環器内科', diseases: ["高血圧症", "心筋梗塞", "心不全", "不整脈"] },
  m_neurology: { system: 'internal', label: '脳神経内科', diseases: ["脳卒中", "パーキンソン病", "アルツハイマー型認知症", "片頭痛"] },
  m_pediatrics: { system: 'internal', label: '小児科', diseases: ["手足口病", "RSウイルス感染症", "喘息性気管支炎", "おたふくかぜ", "水痘 (みずぼうそう)"] },
  m_rheumatology: { system: 'internal', label: 'リウマチ科', diseases: ["関節リウマチ", "全身性エリテマトーデス", "痛風"] },
  m_psychiatry: { system: 'internal', label: '精神科', diseases: ["うつ病", "統合失調症", "双極性障害", "パニック障害"] },

  // 外科系
  s_general: { system: 'surgery', label: '外科', diseases: ["鼠径ヘルニア根治術", "虫垂切除術", "外傷処置"] },
  s_gastro: { system: 'surgery', label: '消化器外科', diseases: ["胃がん手術", "大腸がん手術", "胆嚢摘出術", "痔核手術"] },
  s_vascular: { system: 'surgery', label: '血管外科', diseases: ["下肢静脈瘤手術", "大動脈瘤人工血管置換術"] },
  s_respiratory: { system: 'surgery', label: '呼吸器外科', diseases: ["肺がん手術", "気胸手術"] },
  s_breast: { system: 'surgery', label: '乳腺外科', diseases: ["乳がん手術", "乳房温存手術"] },
  s_neurosurgery: { system: 'surgery', label: '脳神経外科', diseases: ["脳動脈瘤クリッピング術", "脳腫瘍摘出術", "硬膜下血腫穿孔術"] },
  s_orthopedics: { system: 'surgery', label: '整形外科', diseases: ["腰椎椎間板ヘルニア", "変形性膝関節症", "骨折の手術", "肩関節周囲炎 (五十肩)"] },
  s_plastic: { system: 'surgery', label: '形成外科', diseases: ["皮膚腫瘍切除術", "熱傷治療", "眼瞼下垂手術"] },
  s_obgyn: { system: 'surgery', label: '産婦人科', diseases: ["帝王切開", "子宮筋腫摘出術", "卵巣腫瘍摘出術", "子宮頸がん"] },
  s_dermatology: { system: 'surgery', label: '皮膚科', diseases: ["アトピー性皮膚炎", "粉瘤切除術", "帯状疱疹", "足白癬 (水虫)"] },
  s_urology: { system: 'surgery', label: '泌尿器科', diseases: ["前立腺肥大症手術", "尿路結石破砕術", "膀胱がん手術", "過活動膀胱"] },
  s_ophthalmology: { system: 'surgery', label: '眼科', diseases: ["白内障手術", "緑内障", "網膜剥離手術", "ドライアイ"] },
  s_ent: { system: 'surgery', label: '耳鼻咽喉科', diseases: ["扁桃摘出術", "慢性副鼻腔炎手術", "突発性難聴", "アレルギー性鼻炎"] },
  s_dentistry: { system: 'surgery', label: '歯科口腔外科', diseases: ["親知らず抜歯", "顎関節症", "インプラント治療"] },
  s_emergency: { system: 'surgery', label: '救急科', diseases: ["多発外傷", "急性薬物中毒", "熱中症"] },
  s_rehab: { system: 'surgery', label: 'リハビリテーション科', diseases: ["脳卒中後遺症リハビリ", "骨折後リハビリ", "廃用症候群リハビリ"] },

  // その他
  o_radiology: { system: 'other', label: '放射線治療科', diseases: ["定位放射線治療", "強度変調放射線治療", "小線源治療"] },
  o_anesthesia: { system: 'other', label: '麻酔科', diseases: ["全身麻酔", "硬膜外麻酔", "ペインクリニック（神経ブロック）"] },
  o_palliative: { system: 'other', label: '緩和医療科', diseases: ["がん疼痛緩和", "終末期ケア", "レスパイトケア"] }
};

export const languages = [
  { value: "ja", label: "日本語" },
  { value: "en", label: "英語" },
  { value: "zh", label: "中国語" },
  { value: "ko", label: "韓国語" },
  { value: "pt", label: "ポルトガル語" },
  { value: "es", label: "スペイン語" },
  { value: "vi", label: "ベトナム語" }
];

export const comprehensionLevels = [
  { value: "senior", label: "高齢者・一般向け（非常に平易）" },
  { value: "adult", label: "成人向け（標準的）" },
  { value: "child", label: "子供・保護者向け（やさしい表現）" },
  { value: "expert", label: "医療従事者向け（専門的）" },
  { value: "doctor", label: "医師" }
];

export const volumeOptions = [
  { value: "short", label: "短文" },
  { value: "a4_one", label: "A4用紙1枚程度" },
  { value: "multi_page", label: "複数ページ" }
];

export const diagramFormats = [
  { value: "infographic_v", label: "A4一枚縦のインフォグラフィック" },
  { value: "infographic_h", label: "A4一枚横のインフォグラフィック" },
  { value: "comic_multi", label: "複数ページの漫画" }
];

export const slideVolumeOptions = [
  { value: "slide_6", label: "6枚（短め・要点のみ）" },
  { value: "slide_10", label: "10枚（標準的）" },
  { value: "slide_14", label: "14枚（詳細）" }
];
