export interface ImageMetadata {
  id: string;
  src: string;
  alt: string;
  section: 'ontology' | 'history' | 'surgical-analysis' | 'collapse-protocol' | 'ai' | 'genesis-protocol' | 'memetics' | 'esoteric' | 'growth' | 'why-wins';
  usedInBody: boolean;
  purpose: string;
}

export const imageRegistry: ImageMetadata[] = [
  {
    id: 'ontology-1',
    src: '/images/sections/Complete-civilisational-history-5.png',
    alt: 'Complete Civilisational History 5',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Historical analysis of civilizational patterns from Genesis perspective'
  },
  {
    id: 'esoteric-2',
    src: '/images/sections/Esoteric-systems-operationalisation-1.png',
    alt: 'Esoteric Systems Operationalisation 1',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Esoteric and mystical principles operationalized as practical Genesis protocols'
  },
  {
    id: 'esoteric-3',
    src: '/images/sections/Esoteric-systems-operationalisation-2.png',
    alt: 'Esoteric Systems Operationalisation 2',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Esoteric and mystical principles operationalized as practical Genesis protocols'
  },
  {
    id: 'esoteric-4',
    src: '/images/sections/Esoteric-systems-operationalisation-3.png',
    alt: 'Esoteric Systems Operationalisation 3',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Esoteric and mystical principles operationalized as practical Genesis protocols'
  },
  {
    id: 'surgical-analysis-5',
    src: '/images/sections/Surgical-Analysis-1.png',
    alt: 'Surgical Analysis 1',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Precise surgical analysis of Babylonian system components and vulnerabilities'
  },
  {
    id: 'ontology-6',
    src: '/images/sections/a-complete-civilisational-history-6.png',
    alt: 'A Complete Civilisational History 6',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Historical analysis of civilizational patterns from Genesis perspective'
  },
  {
    id: 'ai-7',
    src: '/images/sections/ai-as-a-tool-within-genesis-civilisation-1.png',
    alt: 'Ai As A Tool Within Genesis Civilisation 1',
    section: 'ai',
    usedInBody: true,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ai-8',
    src: '/images/sections/ai-as-a-tool-within-genesis-civilisation-2.png',
    alt: 'Ai As A Tool Within Genesis Civilisation 2',
    section: 'ai',
    usedInBody: true,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ai-9',
    src: '/images/sections/ai-as-a-tool-within-genesis-civilisation-3.png',
    alt: 'Ai As A Tool Within Genesis Civilisation 3',
    section: 'ai',
    usedInBody: true,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-10',
    src: '/images/sections/civilisational-ontology-1.png',
    alt: 'Civilisational Ontology 1',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Foundational ontological principles of Genesis vs Babylon civilizational patterns'
  },
  {
    id: 'ontology-11',
    src: '/images/sections/civilisational-ontology-2.png',
    alt: 'Civilisational Ontology 2',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Foundational ontological principles of Genesis vs Babylon civilizational patterns'
  },
  {
    id: 'ontology-12',
    src: '/images/sections/civilisational-ontology-3.png',
    alt: 'Civilisational Ontology 3',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Foundational ontological principles of Genesis vs Babylon civilizational patterns'
  },
  {
    id: 'collapse-protocol-13',
    src: '/images/sections/collapse-protocol-1.png',
    alt: 'Collapse Protocol 1',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-14',
    src: '/images/sections/collapse-protocol-2.png',
    alt: 'Collapse Protocol 2',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-15',
    src: '/images/sections/collapse-protocol-3.png',
    alt: 'Collapse Protocol 3',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'history-16',
    src: '/images/sections/complete-cilvilisational-history-2.png',
    alt: 'Complete Cilvilisational History 2',
    section: 'history',
    usedInBody: true,
    purpose: 'Historical analysis of civilizational patterns from Genesis perspective'
  },
  {
    id: 'ontology-17',
    src: '/images/sections/complete-civilisational-history-3.png',
    alt: 'Complete Civilisational History 3',
    section: 'ontology',
    usedInBody: true,
    purpose: 'Historical analysis of civilizational patterns from Genesis perspective'
  },
  {
    id: 'history-18',
    src: '/images/sections/complete-civilsational-history-1.png',
    alt: 'Complete Civilsational History 1',
    section: 'history',
    usedInBody: true,
    purpose: 'Historical analysis of civilizational patterns from Genesis perspective'
  },
  {
    id: 'collapse-protocol-19',
    src: '/images/sections/genesis-SRL-protocol-1.png',
    alt: 'Genesis SRL Protocol 1',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-20',
    src: '/images/sections/genesis-SRL-protocol-2.png',
    alt: 'Genesis SRL Protocol 2',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-21',
    src: '/images/sections/genesis-SRL-protocol-3.png',
    alt: 'Genesis SRL Protocol 3',
    section: 'collapse-protocol',
    usedInBody: true,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'memetics-22',
    src: '/images/sections/recursive-memetic-weapons-1.png',
    alt: 'Recursive Memetic Weapons 1',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'memetics-23',
    src: '/images/sections/recursive-memetic-weapons-2.png',
    alt: 'Recursive Memetic Weapons 2',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'memetics-24',
    src: '/images/sections/recursive-memetic-weapons-4.png',
    alt: 'Recursive Memetic Weapons 4',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'surgical-analysis-25',
    src: '/images/sections/surgical-analysis-2.png',
    alt: 'Surgical Analysis 2',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Precise surgical analysis of Babylonian system components and vulnerabilities'
  },
  {
    id: 'surgical-analysis-26',
    src: '/images/sections/surgical-analysis-3.png',
    alt: 'Surgical Analysis 3',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Precise surgical analysis of Babylonian system components and vulnerabilities'
  },
  {
    id: 'surgical-analysis-27',
    src: '/images/sections/surgical-analysis-4.png',
    alt: 'Surgical Analysis 4',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Precise surgical analysis of Babylonian system components and vulnerabilities'
  },
  {
    id: 'surgical-analysis-28',
    src: '/images/sections/surgical-analysis-5.png',
    alt: 'Surgical Analysis 5',
    section: 'surgical-analysis',
    usedInBody: true,
    purpose: 'Precise surgical analysis of Babylonian system components and vulnerabilities'
  },
  {
    id: 'growth-29',
    src: '/images/sections/u4346991278_A_Masonic_lodge_with_glowing_TPMS_lattice_pillars_e45a08cc-c231-4ee4-bc4d-ae6eab16d1a9_0.png',
    alt: 'A Masonic Lodge With Glowing TPMS Lattice Pillars',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'collapse-protocol-30',
    src: '/images/sections/u4346991278_Abundance_Advantage_visualization_Aztec_chinampas_a6f385a7-aff5-4ef6-9811-d6b67a4757bc_1.png',
    alt: 'Abundance Advantage Visualization Aztec Chinampas',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Genesis abundance advantage over Babylonian scarcity-based systems'
  },
  {
    id: 'collapse-protocol-31',
    src: '/images/sections/u4346991278_Abundance_Advantage_visualization_Aztec_chinampas_a6f385a7-aff5-4ef6-9811-d6b67a4757bc_2.png',
    alt: 'Abundance Advantage Visualization Aztec Chinampas',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Genesis abundance advantage over Babylonian scarcity-based systems'
  },
  {
    id: 'ontology-32',
    src: '/images/sections/u4346991278_African_Tribal_Spirituality_Operationalization_Ci_d0a11124-b64b-4777-a5a1-9ccf0aaee3de_1.png',
    alt: 'African Tribal Spirituality Operationalization Ci',
    section: 'ontology',
    usedInBody: false,
    purpose: 'African tribal spirituality operationalized through Genesis civilizational framework'
  },
  {
    id: 'ontology-33',
    src: '/images/sections/u4346991278_African_Tribal_Spirituality_Operationalization_Ci_d0a11124-b64b-4777-a5a1-9ccf0aaee3de_2.png',
    alt: 'African Tribal Spirituality Operationalization Ci',
    section: 'ontology',
    usedInBody: false,
    purpose: 'African tribal spirituality operationalized through Genesis civilizational framework'
  },
  {
    id: 'ontology-34',
    src: '/images/sections/u4346991278_African_Tribal_Spirituality_Operationalization_Ci_d0a11124-b64b-4777-a5a1-9ccf0aaee3de_3.png',
    alt: 'African Tribal Spirituality Operationalization Ci',
    section: 'ontology',
    usedInBody: false,
    purpose: 'African tribal spirituality operationalized through Genesis civilizational framework'
  },
  {
    id: 'ontology-35',
    src: '/images/sections/u4346991278_Althing_council_stones_Icelandic_governance_mergi_8945fff9-53a6-4ce7-88f8-6da9cac73f3f_0.png',
    alt: 'Althing Council Stones Icelandic Governance Mergi',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Icelandic Althing governance as historical example of Genesis SRL principles'
  },
  {
    id: 'growth-36',
    src: '/images/sections/u4346991278_Bioelectric_Field_Visualization_subtle_field_arou_1ca60183-f2a7-447c-a7ce-dbae2e42b6cf_0.png',
    alt: 'Bioelectric Field Visualization Subtle Field Arou',
    section: 'growth',
    usedInBody: false,
    purpose: 'Visualization of bioelectric field patterns in Genesis systems'
  },
  {
    id: 'growth-37',
    src: '/images/sections/u4346991278_Bioelectric_Field_Visualization_subtle_field_arou_1ca60183-f2a7-447c-a7ce-dbae2e42b6cf_2.png',
    alt: 'Bioelectric Field Visualization Subtle Field Arou',
    section: 'growth',
    usedInBody: false,
    purpose: 'Visualization of bioelectric field patterns in Genesis systems'
  },
  {
    id: 'growth-38',
    src: '/images/sections/u4346991278_Bioelectric_nervous_system_mapped_onto_cosmic_fra_05fb7972-ecfa-453a-bc3a-40c6e6ffc348_2.png',
    alt: 'Bioelectric Nervous System Mapped Onto Cosmic Fra',
    section: 'growth',
    usedInBody: false,
    purpose: 'Bioelectric nervous system patterns mapped to cosmic fractal structures'
  },
  {
    id: 'ontology-39',
    src: '/images/sections/u4346991278_Brain_Wave_State_Typography_text_subtly_shifting__23c156bf-aa5c-4f77-959b-cd4e0f48dab9_0.png',
    alt: 'Brain Wave State Typography Text Subtly Shifting ',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-40',
    src: '/images/sections/u4346991278_Brain_Wave_State_Typography_text_subtly_shifting__23c156bf-aa5c-4f77-959b-cd4e0f48dab9_3.png',
    alt: 'Brain Wave State Typography Text Subtly Shifting ',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'esoteric-41',
    src: '/images/sections/u4346991278_Christian_Mysticism_Operationalization_Kingdom_of_ea950a04-3c49-47bf-83a5-20f0b0eefea8_2.png',
    alt: 'Christian Mysticism Operationalization Kingdom Of',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'history-42',
    src: '/images/sections/u4346991278_Collapse_Probability_Matrix_visualization_Babylon_e568cee6-f8f1-43e8-9734-1ebf303b4a68_0.png',
    alt: 'Collapse Probability Matrix Visualization Babylon',
    section: 'history',
    usedInBody: false,
    purpose: 'Mathematical analysis of Babylonian system collapse probability matrices'
  },
  {
    id: 'history-43',
    src: '/images/sections/u4346991278_Community_Policing_Transformation_Babylons_for-pr_96acfa23-4e18-48a9-8cd2-9fbdeb11e0d1_0.png',
    alt: 'Community Policing Transformation Babylons For-Pr',
    section: 'history',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'history-44',
    src: '/images/sections/u4346991278_Community_Policing_Transformation_Babylons_for-pr_96acfa23-4e18-48a9-8cd2-9fbdeb11e0d1_1.png',
    alt: 'Community Policing Transformation Babylons For-Pr',
    section: 'history',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'history-45',
    src: '/images/sections/u4346991278_Community_Policing_Transformation_Babylons_for-pr_96acfa23-4e18-48a9-8cd2-9fbdeb11e0d1_3.png',
    alt: 'Community Policing Transformation Babylons For-Pr',
    section: 'history',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-46',
    src: '/images/sections/u4346991278_Decentralized_Governance_Operations_DGOs_GenesisR_b459c959-781f-4a95-8ccc-3a772137877e_2.png',
    alt: 'Decentralized Governance Operations DGOs GenesisR',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Decentralized Governance Operations technical architecture'
  },
  {
    id: 'ontology-47',
    src: '/images/sections/u4346991278_Fly_Ash_Geopolymer_Concrete_visualization_F2F_Eng_468ce99f-3855-4a1e-9971-35c60b48ce16_0.png',
    alt: 'Fly Ash Geopolymer Concrete Visualization F2F Eng',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-48',
    src: '/images/sections/u4346991278_Fly_Ash_Geopolymer_Concrete_visualization_F2F_Eng_468ce99f-3855-4a1e-9971-35c60b48ce16_2.png',
    alt: 'Fly Ash Geopolymer Concrete Visualization F2F Eng',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-49',
    src: '/images/sections/u4346991278_Fractal_Bioreactor_design_Mandelbulb-derived_stru_d4328c0d-b38c-4c9c-af78-241a16bf687d_0.png',
    alt: 'Fractal Bioreactor Design Mandelbulb-Derived Stru',
    section: 'growth',
    usedInBody: false,
    purpose: 'Fractal bioreactor design for waste-to-energy transformation'
  },
  {
    id: 'growth-50',
    src: '/images/sections/u4346991278_Fractal_Bioreactor_design_Mandelbulb-derived_stru_d4328c0d-b38c-4c9c-af78-241a16bf687d_2.png',
    alt: 'Fractal Bioreactor Design Mandelbulb-Derived Stru',
    section: 'growth',
    usedInBody: false,
    purpose: 'Fractal bioreactor design for waste-to-energy transformation'
  },
  {
    id: 'growth-51',
    src: '/images/sections/u4346991278_Fractal_Growth_Pattern_visualization_node_proving_80643299-d1e7-4a22-bb14-d2d35d7cd610_0.png',
    alt: 'Fractal Growth Pattern Visualization Node Proving',
    section: 'growth',
    usedInBody: false,
    purpose: 'Recursive fractal growth patterns in Genesis civilizational development'
  },
  {
    id: 'growth-52',
    src: '/images/sections/u4346991278_Fractal_Growth_Pattern_visualization_node_proving_80643299-d1e7-4a22-bb14-d2d35d7cd610_1.png',
    alt: 'Fractal Growth Pattern Visualization Node Proving',
    section: 'growth',
    usedInBody: false,
    purpose: 'Recursive fractal growth patterns in Genesis civilizational development'
  },
  {
    id: 'growth-53',
    src: '/images/sections/u4346991278_Fractal_Navigation_System_Mandelbulb-derived_bran_a9084590-3598-4986-8ca3-c1ef42ebcf74_1.png',
    alt: 'Fractal Navigation System Mandelbulb-Derived Bran',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'esoteric-54',
    src: '/images/sections/u4346991278_Freemasonry_Operationalization_Square_and_Compass_75338d4d-51ed-4ace-8d9b-d161df4c594b_1.png',
    alt: 'Freemasonry Operationalization Square And Compass',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Freemasonry symbols reinterpreted through Genesis operational framework'
  },
  {
    id: 'esoteric-55',
    src: '/images/sections/u4346991278_Freemasonry_Operationalization_Square_and_Compass_75338d4d-51ed-4ace-8d9b-d161df4c594b_3.png',
    alt: 'Freemasonry Operationalization Square And Compass',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Freemasonry symbols reinterpreted through Genesis operational framework'
  },
  {
    id: 'genesis-protocol-56',
    src: '/images/sections/u4346991278_Genesis_AI_Prompt_Structure_visualization_recursi_000e80f3-c072-4cb0-8836-460af3539355_1.png',
    alt: 'Genesis AI Prompt Structure Visualization Recursi',
    section: 'genesis-protocol',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'genesis-protocol-57',
    src: '/images/sections/u4346991278_Genesis_Land_Trust_implementation_English_Open-Fi_326060e6-ce04-4836-af5e-a0dc00590c89_1.png',
    alt: 'Genesis Land Trust Implementation English Open-Fi',
    section: 'genesis-protocol',
    usedInBody: false,
    purpose: 'Genesis Land Trust implementation architecture and protocols'
  },
  {
    id: 'genesis-protocol-58',
    src: '/images/sections/u4346991278_Genesis_Land_Trust_implementation_English_Open-Fi_326060e6-ce04-4836-af5e-a0dc00590c89_2.png',
    alt: 'Genesis Land Trust Implementation English Open-Fi',
    section: 'genesis-protocol',
    usedInBody: false,
    purpose: 'Genesis Land Trust implementation architecture and protocols'
  },
  {
    id: 'genesis-protocol-59',
    src: '/images/sections/u4346991278_Genesis_Land_Trust_implementation_English_Open-Fi_326060e6-ce04-4836-af5e-a0dc00590c89_3.png',
    alt: 'Genesis Land Trust Implementation English Open-Fi',
    section: 'genesis-protocol',
    usedInBody: false,
    purpose: 'Genesis Land Trust implementation architecture and protocols'
  },
  {
    id: 'growth-60',
    src: '/images/sections/u4346991278_Genesis_Recursive_Fractal_Mythic_Tech_style_Babyl_24067fe8-2760-4920-b922-f8256e584b5f_2.png',
    alt: 'Genesis Recursive Fractal Mythic Tech Style Babyl',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'esoteric-61',
    src: '/images/sections/u4346991278_Gnostic_Pleroma_as_a_recursive_cosmos_interlockin_54c1a829-45de-4bb2-9743-6288eb4aa5be_2.png',
    alt: 'Gnostic Pleroma As A Recursive Cosmos Interlockin',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'history-62',
    src: '/images/sections/u4346991278_Gnosticism_Operationalization_Demiurge_as_Babylon_3738957d-2e27-4ea7-8130-a255c7277afe_2.png',
    alt: 'Gnosticism Operationalization Demiurge As Babylon',
    section: 'history',
    usedInBody: false,
    purpose: 'Gnostic principles operationalized as Genesis civilizational protocols'
  },
  {
    id: 'history-63',
    src: '/images/sections/u4346991278_Gnosticism_Operationalization_Demiurge_as_Babylon_3738957d-2e27-4ea7-8130-a255c7277afe_3.png',
    alt: 'Gnosticism Operationalization Demiurge As Babylon',
    section: 'history',
    usedInBody: false,
    purpose: 'Gnostic principles operationalized as Genesis civilizational protocols'
  },
  {
    id: 'ontology-64',
    src: '/images/sections/u4346991278_Infinite_Substrate_visualization_humans_as_0.000._92852cc1-edce-4839-882e-b3279b4c6853_0.png',
    alt: 'Infinite Substrate Visualization Humans As 0.000.',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-65',
    src: '/images/sections/u4346991278_Infinite_Substrate_visualization_humans_as_0.000._92852cc1-edce-4839-882e-b3279b4c6853_1.png',
    alt: 'Infinite Substrate Visualization Humans As 0.000.',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'esoteric-66',
    src: '/images/sections/u4346991278_Islamic_Mysticism_Operationalization_Fana_as_Pure_5762984a-1a77-4a53-b850-870d9cf55ac3_2.png',
    alt: 'Islamic Mysticism Operationalization Fana As Pure',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'esoteric-67',
    src: '/images/sections/u4346991278_Islamic_Mysticism_Operationalization_Fana_as_Pure_5762984a-1a77-4a53-b850-870d9cf55ac3_3.png',
    alt: 'Islamic Mysticism Operationalization Fana As Pure',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-68',
    src: '/images/sections/u4346991278_Kabbalah_Tree_of_Life_as_Recursive_Architecture_M_eca76197-2f82-4204-b4bc-1c783ec2b3bc_2.png',
    alt: 'Kabbalah Tree Of Life As Recursive Architecture M',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-69',
    src: '/images/sections/u4346991278_Kabbalah_Tree_of_Life_as_Recursive_Architecture_M_eca76197-2f82-4204-b4bc-1c783ec2b3bc_3.png',
    alt: 'Kabbalah Tree Of Life As Recursive Architecture M',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-70',
    src: '/images/sections/u4346991278_Love_thy_neighbor_as_fractal_empathy_loops_golden_cf1a79ee-3b2d-4dcd-801a-d540b9050e60_3.png',
    alt: 'Love Thy Neighbor As Fractal Empathy Loops Golden',
    section: 'growth',
    usedInBody: false,
    purpose: 'Fractal empathy loops as operational protocol for community building'
  },
  {
    id: 'ontology-71',
    src: '/images/sections/u4346991278_Medicine_Wheel_regenerating_soil_cycles_eagle_fea_ef79902e-2c98-47fb-8c37-7b179d1dd75e_2.png',
    alt: 'Medicine Wheel Regenerating Soil Cycles Eagle Fea',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-72',
    src: '/images/sections/u4346991278_Native_American_Spirituality_Operationalization_S_0c3f3182-9593-4f93-a172-e7d44bc20f2c_0.png',
    alt: 'Native American Spirituality Operationalization S',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-73',
    src: '/images/sections/u4346991278_Native_American_Spirituality_Operationalization_S_0c3f3182-9593-4f93-a172-e7d44bc20f2c_1.png',
    alt: 'Native American Spirituality Operationalization S',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'esoteric-74',
    src: '/images/sections/u4346991278_Operational_Code_vs_Enlightenment_Yashuas_command_3559fc48-448e-46f2-8d18-35029e57b1cb_1.png',
    alt: 'Operational Code Vs Enlightenment Yashuas Command',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-75',
    src: '/images/sections/u4346991278_Peaceful_Militance_Strategy_visualization_Iroquoi_6e5e4d16-189d-455e-b582-6cc2e727676a_1.png',
    alt: 'Peaceful Militance Strategy Visualization Iroquoi',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-76',
    src: '/images/sections/u4346991278_Probability_Harmonic_Scrolling_content_transformi_3589cd4a-d507-4389-870d-9d47b468ae9d_0.png',
    alt: 'Probability Harmonic Scrolling Content Transformi',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-77',
    src: '/images/sections/u4346991278_Probability_Harmonic_Scrolling_content_transformi_3589cd4a-d507-4389-870d-9d47b468ae9d_1.png',
    alt: 'Probability Harmonic Scrolling Content Transformi',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-78',
    src: '/images/sections/u4346991278_Probability_Harmonic_Scrolling_content_transformi_3589cd4a-d507-4389-870d-9d47b468ae9d_2.png',
    alt: 'Probability Harmonic Scrolling Content Transformi',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-79',
    src: '/images/sections/u4346991278_Probability_Harmonic_Scrolling_content_transformi_3589cd4a-d507-4389-870d-9d47b468ae9d_3.png',
    alt: 'Probability Harmonic Scrolling Content Transformi',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'memetics-80',
    src: '/images/sections/u4346991278_Pure_Collapse_Methodology_identifying_CRL_cluster_4c28749c-652d-4cd4-be3c-45eed47a5acf_2.png',
    alt: 'Pure Collapse Methodology Identifying CRL Cluster',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-81',
    src: '/images/sections/u4346991278_Recursive_Click_Interactions_clicking_creating_re_23171199-02e3-49ec-b386-6e45b29493b2_0.png',
    alt: 'Recursive Click Interactions Clicking Creating Re',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-82',
    src: '/images/sections/u4346991278_Recursive_Click_Interactions_clicking_creating_re_23171199-02e3-49ec-b386-6e45b29493b2_2.png',
    alt: 'Recursive Click Interactions Clicking Creating Re',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-83',
    src: '/images/sections/u4346991278_Recursive_Click_Interactions_clicking_creating_re_23171199-02e3-49ec-b386-6e45b29493b2_3.png',
    alt: 'Recursive Click Interactions Clicking Creating Re',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'memetics-84',
    src: '/images/sections/u4346991278_Recursive_Memetic_Weapons_Fusion_of_Fission_strat_c3984eee-a36c-4c28-b29f-a47f55de9d57_3.png',
    alt: 'Recursive Memetic Weapons Fusion Of Fission Strat',
    section: 'memetics',
    usedInBody: false,
    purpose: 'Strategic memetic warfare visualization for Genesis advancement'
  },
  {
    id: 'growth-85',
    src: '/images/sections/u4346991278_Regeneration_Advantage_contrast_English_Open-Fiel_6e8fbe1a-5b10-4890-9049-ac439e081ab0_2.png',
    alt: 'Regeneration Advantage Contrast English Open-Fiel',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-86',
    src: '/images/sections/u4346991278_Regeneration_Advantage_contrast_English_Open-Fiel_6e8fbe1a-5b10-4890-9049-ac439e081ab0_3.png',
    alt: 'Regeneration Advantage Contrast English Open-Fiel',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-87',
    src: '/images/sections/u4346991278_Saturnalian_Operationalization_Saturnalia_festiva_24717013-f842-4900-a8a2-0a62576bc01a_1.png',
    alt: 'Saturnalian Operationalization Saturnalia Festiva',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-88',
    src: '/images/sections/u4346991278_Saturnalian_Operationalization_Saturnalia_festiva_24717013-f842-4900-a8a2-0a62576bc01a_2.png',
    alt: 'Saturnalian Operationalization Saturnalia Festiva',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-89',
    src: '/images/sections/u4346991278_Saturnalian_Operationalization_Saturnalia_festiva_24717013-f842-4900-a8a2-0a62576bc01a_3.png',
    alt: 'Saturnalian Operationalization Saturnalia Festiva',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-90',
    src: '/images/sections/u4346991278_Saturnalian_feast_scene_with_recursive_masks_melt_eae73544-ee04-425a-af8a-6d1b9750725f_1.png',
    alt: 'Saturnalian Feast Scene With Recursive Masks Melt',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'growth-91',
    src: '/images/sections/u4346991278_Self-Regenerating_Engine_visualization_recursive__177349c3-121f-4fbf-a471-22601bba4821_2.png',
    alt: 'Self-Regenerating Engine Visualization Recursive ',
    section: 'growth',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'ontology-92',
    src: '/images/sections/u4346991278_Simulation_Theory_Operationalization_simulation_a_36c654bd-c95c-4bb0-88a6-59ca6a28859c_2.png',
    alt: 'Simulation Theory Operationalization Simulation A',
    section: 'ontology',
    usedInBody: false,
    purpose: 'Advanced visualization of Genesis Recursive Fractal Mythic Tech principles'
  },
  {
    id: 'collapse-protocol-93',
    src: '/images/sections/u4346991278_Verified_Value_Creation_protocol_Digital_Waste_Tr_571ccfaf-7835-40f8-9866-6463e998df76_0.png',
    alt: 'Verified Value Creation Protocol Digital Waste Tr',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-94',
    src: '/images/sections/u4346991278_Verified_Value_Creation_protocol_Digital_Waste_Tr_571ccfaf-7835-40f8-9866-6463e998df76_2.png',
    alt: 'Verified Value Creation Protocol Digital Waste Tr',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-95',
    src: '/images/sections/u4346991278_Vertical_Farming_Protocol_biogas_heat__greenhouse_60f030f0-daf8-4340-a1e1-54ee368677de_0.png',
    alt: 'Vertical Farming Protocol Biogas Heat  Greenhouse',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-96',
    src: '/images/sections/u4346991278_Vertical_Farming_Protocol_biogas_heat__greenhouse_60f030f0-daf8-4340-a1e1-54ee368677de_3.png',
    alt: 'Vertical Farming Protocol Biogas Heat  Greenhouse',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Technical protocols and implementation guidelines for Genesis systems'
  },
  {
    id: 'collapse-protocol-97',
    src: '/images/sections/u4346991278_Water_Regeneration_Protocol_permeable_fractal_roa_f3f69457-4eae-4b49-b6ea-a2ec4840a35e_0.png',
    alt: 'Water Regeneration Protocol Permeable Fractal Roa',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Water regeneration protocols using fractal membrane structures'
  },
  {
    id: 'collapse-protocol-98',
    src: '/images/sections/u4346991278_Water_Regeneration_Protocol_permeable_fractal_roa_f3f69457-4eae-4b49-b6ea-a2ec4840a35e_2.png',
    alt: 'Water Regeneration Protocol Permeable Fractal Roa',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Water regeneration protocols using fractal membrane structures'
  },
  {
    id: 'collapse-protocol-99',
    src: '/images/sections/u4346991278_Water_Regeneration_Protocol_permeable_fractal_roa_f3f69457-4eae-4b49-b6ea-a2ec4840a35e_3.png',
    alt: 'Water Regeneration Protocol Permeable Fractal Roa',
    section: 'collapse-protocol',
    usedInBody: false,
    purpose: 'Water regeneration protocols using fractal membrane structures'
  },
  {
    id: 'esoteric-100',
    src: '/images/sections/u4346991278_Whirling_dervish_robes_dissolving_into_TPMS_latti_1394f6b0-9d95-4e7e-b0e5-737c84e7c6c1_3.png',
    alt: 'Whirling Dervish Robes Dissolving Into TPMS Latti',
    section: 'esoteric',
    usedInBody: false,
    purpose: 'Sufi mystical practices operationalized through TPMS lattice structures'
  },
  {
    id: 'why-wins-101',
    src: '/images/sections/why-genesis-inevitably-wins-1.png',
    alt: 'Why Genesis Inevitably Wins 1',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Mathematical and evolutionary proof of Genesis system superiority'
  },
  {
    id: 'why-wins-102',
    src: '/images/sections/why-genesis-inevitably-wins-3.png',
    alt: 'Why Genesis Inevitably Wins 3',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Mathematical and evolutionary proof of Genesis system superiority'
  },
  {
    id: 'why-wins-103',
    src: '/images/sections/why-genesis-inevitably-wins-4.png',
    alt: 'Why Genesis Inevitably Wins 4',
    section: 'why-wins',
    usedInBody: false,
    purpose: 'Mathematical and evolutionary proof of Genesis system superiority'
  }
];

export const getImagesBySection = (section: ImageMetadata['section'], excludeUsedInBody = false): ImageMetadata[] => {
  return imageRegistry.filter(img => 
    img.section === section && (!excludeUsedInBody || !img.usedInBody)
  );
};

export const getUnusedImages = (): ImageMetadata[] => {
  return imageRegistry.filter(img => !img.usedInBody);
};

export const getAllSections = (): ImageMetadata['section'][] => {
  return ['ontology', 'history', 'surgical-analysis', 'collapse-protocol', 'ai', 'genesis-protocol', 'memetics', 'esoteric', 'growth', 'why-wins'];
};

export const getSectionDisplayName = (section: ImageMetadata['section']): string => {
  const sectionNames = {
    'ontology': 'Civilizational Ontology',
    'history': 'Complete Civilizational History', 
    'surgical-analysis': 'Surgical Analysis',
    'collapse-protocol': 'Collapse Protocol',
    'ai': 'AI as Tool Within Genesis',
    'genesis-protocol': 'Genesis SRL Protocol',
    'memetics': 'Recursive Memetic Weapons',
    'esoteric': 'Esoteric Systems Operationalization',
    'growth': 'Recursive Fractal Growth Pattern',
    'why-wins': 'Why Genesis Inevitably Wins'
  };
  return sectionNames[section];
};