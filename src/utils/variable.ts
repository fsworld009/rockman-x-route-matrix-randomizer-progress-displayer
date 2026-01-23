export const imgBasePath = './progress_tracker_assets/'

const bImgObject = ['b.png', 'ba.png', 'br.png', 'bd.png', 'bc.png']
export const imgSourceObject = {
  'x1': {
    'bosses': [
      'x1_bosses_lo.png',
      'x1_bosses_sc.png',
      'x1_bosses_aa.png',
      'x1_bosses_fm.png',
      'x1_bosses_se.png',
      'x1_bosses_sm.png',
      'x1_bosses_bk.png',
      'x1_bosses_cp.png',
    ],
    'weapon': [
      'x1_weapon_lo.png',
      'x1_weapon_sc.png',
      'x1_weapon_aa.png',
      'x1_weapon_fm.png',
      'x1_weapon_se.png',
      'x1_weapon_sm.png',
      'x1_weapon_bk.png',
      'x1_weapon_cp.png',
    ],
    'armor': [
      'x1_x_head.png',
      'x1_x_arm.png',
      'x1_x_body.png',
      'x1_x_foot.png',
    ],
    'super': ['x1_x_hadouken.png'],
    'sigma': 'sigma.png',
    'hp': 'heart.png',
    'wp': 'energy.png',
    'e': 'etank.png',
    'b': bImgObject,
    'sigmaBosses': 'x1_sigma_boss.gif'
  },
  'x2': {
    'bosses': [
      'x2_bosses_mm.png',
      'x2_bosses_ws.png',
      'x2_bosses_bc.png',
      'x2_bosses_fs.png',
      'x2_bosses_mc.png',
      'x2_bosses_cs.png',
      'x2_bosses_oo.png',
      'x2_bosses_wg.png',
    ],
    'weapon': [
      'x2_weapon_mm.png',
      'x2_weapon_ws.png',
      'x2_weapon_bc.png',
      'x2_weapon_fs.png',
      'x2_weapon_mc.png',
      'x2_weapon_cs.png',
      'x2_weapon_oo.png',
      'x2_weapon_wg.png',
    ],
    'armor': [
      'x2_x_head.png',
      'x2_x_arm.png',
      'x2_x_body.png',
      'x2_x_foot.png',
    ],
    'super': ['x2_x_shoryuken.png'],
    'sigma': 'sigma.png',
    'hp': 'heart.png',
    'wp': 'energy.png',
    'e': 'etank.png',
    'b': bImgObject,
    'zero': [
      'x2_zero_head.ico',
      'x2_zero_body.ico',
      'x2_zero_foot.ico',
    ],
    'sigmaBosses': 'x2_sigma_boss.gif'
  },
  'x3': {
    'bosses': [
      'x3_bosses_bh.png',
      'x3_bosses_bb.png',
      'x3_bosses_gb.png',
      'x3_bosses_ts.png',
      'x3_bosses_vc.png',
      'x3_bosses_cc.png',
      'x3_bosses_tr.png',
      'x3_bosses_nt.png',
    ],
    'weapon': [
      'x3_weapon_bh.png',
      'x3_weapon_bb.png',
      'x3_weapon_gb.png',
      'x3_weapon_ts.png',
      'x3_weapon_vc.png',
      'x3_weapon_cc.png',
      'x3_weapon_tr.png',
      'x3_weapon_nt.png',
    ],
    'armor': [
      'x3_x_head.png',
      'x3_x_arm.png',
      'x3_x_body.png',
      'x3_x_foot.png',
      'x3_x_head_chip.png',
      'x3_x_arm_chip.png',
      'x3_x_body_chip.png',
      'x3_x_foot_chip.png',
    ],
    'super': ['x3_x_saber.png'],
    'sigma': 'sigma.png',
    'hp': 'heart.png',
    'wp': 'energy.png',
    'e': 'etank.png',
    'b': bImgObject,
    'subbosses': [
      'x3_subbosses_bff.png',
      'x3_subbosses_mbb.png',
      'x3_subbosses_vava.png'
    ],
    'ridearmor': [
      'x3_ridearmor_f.png',
      'x3_ridearmor_h.png',
      'x3_ridearmor_k.png',
      'x3_ridearmor_n.png'
    ],
    'sigmaBosses': 'x3_sigma_boss.gif'
  },
  'miscellaneous': {
    'sigma': 'sigma.png',
    'hp': 'heart.png',
    'wp': 'energy.png',
    'd': 'deaths.png',
    'igf': 'igf.png',
    'title': 'title_xRMR.ico',
  },
  'title': {
    'x1': 'title_x1.ico',
    'x2': 'title_x2.ico',
    'x3': 'title_x3.ico',
  }
}

export const initItemStatus = {
  'x1': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(4).fill(0),
    super: Array(1).fill(0),
    sigma: Array(1).fill(0),
    hp: Array(1).fill(0),
    wp: Array(1).fill(0),
    e: Array(1).fill(0),
    b: Array(5).fill(0),
    sigmaBosses: Array(4).fill(0),
    allClear: Array(1).fill(0),
  },
  'x2': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(4).fill(0),
    super: Array(1).fill(0),
    sigma: Array(1).fill(0),
    hp: Array(1).fill(0),
    wp: Array(1).fill(0),
    e: Array(1).fill(0),
    b: Array(5).fill(0),
    zero: Array(3).fill(0),
    sigmaBosses: Array(5).fill(0),
    allClear: Array(1).fill(0),
  },
  'x3': {
    bosses: Array(8).fill(0),
    weapon: Array(8).fill(0),
    armor: Array(4).fill(0),
    super: Array(1).fill(0),
    sigma: Array(1).fill(0),
    hp: Array(1).fill(0),
    wp: Array(1).fill(0),
    e: Array(1).fill(0),
    b: Array(5).fill(0),
    subbosses: Array(3).fill(0),
    ridearmor: Array(4).fill(0),
    sigmaBosses: Array(6).fill(0),
    allClear: Array(1).fill(0),
  },
  'miscellaneous': {
    sigma: Array(1).fill(0),
    hp: Array(1).fill(0),
    wp: Array(1).fill(0),
    d: Array(1).fill(0),
    igf: Array(1).fill(0),
    title: Array(1).fill(0),
    x1Enabled: Array(1).fill(0),
    x2Enabled: Array(1).fill(0),
    x3Enabled: Array(1).fill(0),
  },
}
export const addressMapping = {
  'x1': {
    'bosses': [
      // unlocked, beaten, changed
      // lo ['0x030']
      ['1ItKeyLO', '1ChLOClear'],
      // sc ['0x031', '0x039']
      ['1ItKeySC', '1ChSCClear', '1ItStageVariedSC'],
      // aa ['0x032']
      ['1ItKeyAA', '1ChAAClear'],
      // bn/fm ['0x033', '0x03B']
      ['1ItKeyBN', '1ChBNClear', '1ItStageVariedBN'],
      // se ['0x034']
      ['1ItKeySE', '1ChSEClear'],
      // sm ['0x035', '0x03D']
      ['1ItKeySM', '1ChSMClear', '1ItStageVariedSM'],
      // bk ['0x036']
      ['1ItKeyBK', '1ChBKClear'],
      // ip/cp ['0x037']
      ['1ItKeyIP', '1ChIPClear']
    ],
    'weapon': [
      // lo ['0x028']
      ['1ItWeaponLO'],
      // sc ['0x029']
      ['1ItWeaponSC'],
      // aa ['0x02A']
      ['1ItWeaponAA'],
      // bn/fm ['0x02B']
      ['1ItWeaponBN'],
      // se ['0x02C']
      ['1ItWeaponSE'],
      // sm ['0x02D']
      ['1ItWeaponSM'],
      // bk ['0x02E']
      ['1ItWeaponBK'],
      // ip/cp ['0x02F']
      ['1ItWeaponIP']
    ],
    'armor': [
      // head ['0x058']
      ['1ItHeadPart', '', '', '1ItHeadChip'],
      // arm ['0x05A']
      ['1ItArmPart', '', '', '1ItArmChip'],
      // body ['0x05C']
      ['1ItBodyPart', '', '', '1ItBodyChip'],
      // foot ['0x05E']
      ['1ItFootPart', '', '', '1ItFootChip'],
    ],
    'super': [
      // hadou ['0x050']
      ['1ItHadouken']
    ],
    'sigma': [
      [[
        '1ItKeyS1', '1ItKeyS2', '1ItKeyS3', '1ItKeyS4', '1ItKeyS5', '1ItKeyS6', '1ItKeyS7', '1ItKeyS8', '1ItKeyS9', '1ItKeyS10', '1ItKeyS11', '1ItKeyS12', '1ItKeyS13',
      ]],
    ],
    'hp': [
      [[
        '1ItLifeUp1', '1ItLifeUp2', '1ItLifeUp3', '1ItLifeUp4', '1ItLifeUp5', '1ItLifeUp6', '1ItLifeUp7', '1ItLifeUp8',
        '1ItLifeUpD1', '1ItLifeUpD2', '1ItLifeUpD3', '1ItLifeUpD4', '1ItLifeUpD5', '1ItLifeUpD6',
      ]],
    ],
    'wp': [
      [[
        '1ItEnergyUp1', '1ItEnergyUp2', '1ItEnergyUp3', '1ItEnergyUp4', '1ItEnergyUp5', '1ItEnergyUp6', '1ItEnergyUp7', '1ItEnergyUp8', '1ItEnergyUp9', '1ItEnergyUp10', '1ItEnergyUp11', '1ItEnergyUp12', '1ItEnergyUp13', '1ItEnergyUp14',
      ]],
    ],
    'e': [
      [['1ItSubtank1', '1ItSubtank2', '1ItSubtank3', '1ItSubtank4']]
    ],
    'b': [
      [['1ItBusterAmmo1', '1ItBusterAmmo2', '1ItBusterAmmo3', '1ItBusterAmmo4', '1ItBusterAmmo5',]],
      [['1ItBusterAttack100', '1ItBusterAttack150',]],
      [['1ItBusterFireRate3', '1ItBusterFireRate4', '1ItBusterFireRate5', '1ItBusterFireRate6', '1ItBusterFireRate30', '1ItBusterFireRate60',]],
      [['1ItBusterDashShot1', '1ItBusterDashShotUnlimited',]],
      [['1ItCharge75', '1ItCharge100', '1ItCharge125', '1ItCharge150',]],
    ],
    'sigmaBosses': [
      [[
        '1ChOPClear', '1ChS1Clear', '1ChS2Clear', '1ChS3Clear',
      ]]
    ],
    'allClear': [
      ['', '1SFinalClear', '', '1SFinalClear']
    ]
  },
  'x2': {
    'bosses': [
      // mm ['0x130']
      ['2ItKeyMM', '2ChMMClear'],
      // wh/ws ['0x131']
      ['2ItKeyWH', '2ChWHClear'],
      // bc ['0x132']
      ['2ItKeyBC', '2ChBCClear'],
      // fs ['0x133']
      ['2ItKeyFS', '2ChFSClear'],
      // mh/mc ['0x134']
      ['2ItKeyMH', '2ChMHClear'],
      // cm/cs ['0x135']
      ['2ItKeyCM', '2ChCMClear'],
      // so,oo ['0x136']
      ['2ItKeySO', '2ChSOClear'],
      // wa/wg ['0x137']
      ['2ItKeyWA', '2ChWAClear'],
    ],
    'weapon': [
      // mm ['0x128']
      ['2ItWeaponMM'],
      // wh/ws ['0x129']
      ['2ItWeaponWH'],
      // bc ['0x12A']
      ['2ItWeaponBC'],
      // fs ['0x12B']
      ['2ItWeaponFS'],
      // mh/mc ['0x12C']
      ['2ItWeaponMH'],
      // cm/cs ['0x12D']
      ['2ItWeaponCM'],
      // so,oo ['0x12E']
      ['2ItWeaponSO'],
      // wa/wg ['0x12F']
      ['2ItWeaponWA'],
    ],
    'armor': [
      // head ['0x158']
      ['2ItHeadPart', '', '', '2ItHeadChip'],
      // arm ['0x15A']
      ['2ItArmPart', '', '', '2ItArmChip'],
      // body ['0x15C']
      ['2ItBodyPart', '', '', '2ItBodyChip'],
      // foot ['0x15E']
      ['2ItFootPart', '', '', '2ItFootChip'],
    ],
    'super': [
      // shoryu ['0x150']
      ['2ItShoryuken'],
    ],
    'sigma': [
      [[
        '2ItKeyS1', '2ItKeyS2', '2ItKeyS3', '2ItKeyS4', '2ItKeyS5', '2ItKeyS6', '2ItKeyS7', '2ItKeyS8', '2ItKeyS9', '2ItKeyS10', '2ItKeyS11', '2ItKeyS12', '2ItKeyS13',
      ]],
    ],
    'hp': [
      [[
        '2ItLifeUp1', '2ItLifeUp2', '2ItLifeUp3', '2ItLifeUp4', '2ItLifeUp5', '2ItLifeUp6', '2ItLifeUp7', '2ItLifeUp8',
        '2ItLifeUpD1', '2ItLifeUpD2', '2ItLifeUpD3', '2ItLifeUpD4', '2ItLifeUpD5', '2ItLifeUpD6',
      ]],
    ],
    'wp': [
      [[
        '2ItEnergyUp1', '2ItEnergyUp2', '2ItEnergyUp3', '2ItEnergyUp4', '2ItEnergyUp5', '2ItEnergyUp6', '2ItEnergyUp7', '2ItEnergyUp8', '2ItEnergyUp9', '2ItEnergyUp10', '2ItEnergyUp11', '2ItEnergyUp12', '2ItEnergyUp13', '2ItEnergyUp14',
      ]],
    ],
    'e': [
      [['2ItSubtank1', '2ItSubtank2', '2ItSubtank3', '2ItSubtank4']]
    ],
    'b': [
      [['2ItBusterAmmo1', '2ItBusterAmmo2', '2ItBusterAmmo3', '2ItBusterAmmo4', '2ItBusterAmmo5',]],
      [['2ItBusterAttack100', '2ItBusterAttack150',]],
      [['2ItBusterFireRate3', '2ItBusterFireRate4', '2ItBusterFireRate5', '2ItBusterFireRate6', '2ItBusterFireRate30', '2ItBusterFireRate60',]],
      [['2ItBusterDashShot1', '2ItBusterDashShotUnlimited',]],
      [['2ItCharge75', '2ItCharge100', '2ItCharge125', '2ItCharge150',]],
    ],
    'zero': [
      // head ['0x139']
      ['2ItZeroFHead'],
      // body ['0x13A']
      ['2ItZeroBody'],
      // foot ['0x138']
      ['2ItZeroFoot'],
    ],
    'sigmaBosses': [
      [[
        '2ChOPClear', '2ChS1Clear', '2ChS2Clear', '2ChS3Clear', '2ChS4Clear',
      ]]
    ],
    'allClear': [
      ['', '2SFinalClear', '', '2SFinalClear']
    ]
  },
  'x3': {
    'bosses': [
      // eh/bh ['0x230', '0x238']
      ['3ItKeyEH', '3ChEHClear', '3ItStageVariedEH'],
      // fb/bb ['0x231', '0x239']
      ['3ItKeyFB', '3ChFBClear', '3ItStageVariedFB'],
      // gb ['0x232', '0x23A']
      ['3ItKeyGB', '3ChGBClear', '3ItStageVariedGB'],
      // as/ts ['0x233']
      ['3ItKeyAS', '3ChASClear'],
      // en/vc ['0x234']
      ['3ItKeyEN', '3ChENClear'],
      // ss/cc ['0x235']
      ['3ItKeySS', '3ChSSClear'],
      // sm/tr ['0x236']
      ['3ItKeySM', '3ChSMClear'],
      // st/nt ['0x237']
      ['3ItKeyST', '3ChSTClear'],
    ],
    'weapon': [
      // eh/bh ['0x228']
      ['3ItWeaponEH'],
      // fb/bb ['0x229']
      ['3ItWeaponFB'],
      // gb ['0x22A']
      ['3ItWeaponGB'],
      // as/ts ['0x22B']
      ['3ItWeaponAS'],
      // en/vc ['0x22C']
      ['3ItWeaponEN'],
      // ss/cc ['0x22D']
      ['3ItWeaponSS'],
      // sm/tr ['0x22E']
      ['3ItWeaponSM'],
      // st/nt ['0x22F']
      ['3ItWeaponST'],
    ],
    'armor': [
      // head ['0x258']
      ['3ItHeadPart', '', '', '3ItHeadChip'],
      // arm ['0x25A']
      ['3ItArmPart', '', '', '3ItArmChip'],
      // body ['0x25C']
      ['3ItBodyPart', '', '', '3ItBodyChip'],
      // foot ['0x25E']
      ['3ItFootPart', '', '', '3ItFootChip'],
    ],
    'super': [
      // saber ['0x250']
      ['3ItSaber'],
    ],
    'sigma': [
      [[
        '3ItKeyS1', '3ItKeyS2', '3ItKeyS3', '3ItKeyS4', '3ItKeyS5', '3ItKeyS6', '3ItKeyS7', '3ItKeyS8', '3ItKeyS9', '3ItKeyS10', '3ItKeyS11', '3ItKeyS12', '3ItKeyS13', '3ItKeyS14',
      ]]
    ],
    'hp': [
      [[
        '3ItLifeUp1', '3ItLifeUp2', '3ItLifeUp3', '3ItLifeUp4', '3ItLifeUp5', '3ItLifeUp6', '3ItLifeUp7', '3ItLifeUp8',
        '3ItLifeUpD1', '3ItLifeUpD2', '3ItLifeUpD3', '3ItLifeUpD4', '3ItLifeUpD5', '3ItLifeUpD6',
      ]],
    ],
    'wp': [
      [[
        '3ItEnergyUp1', '3ItEnergyUp2', '3ItEnergyUp3', '3ItEnergyUp4', '3ItEnergyUp5', '3ItEnergyUp6', '3ItEnergyUp7', '3ItEnergyUp8', '3ItEnergyUp9', '3ItEnergyUp10', '3ItEnergyUp11', '3ItEnergyUp12', '3ItEnergyUp13', '3ItEnergyUp14',
      ]]
    ],
    'e': [
      [['3ItSubtank1', '3ItSubtank2', '3ItSubtank3', '3ItSubtank4']]
    ],
    'b': [
      [['3ItBusterAmmo1', '3ItBusterAmmo2', '3ItBusterAmmo3', '3ItBusterAmmo4', '3ItBusterAmmo5',]],
      [['3ItBusterAttack100', '3ItBusterAttack150',]],
      [['3ItBusterFireRate3', '3ItBusterFireRate4', '3ItBusterFireRate5', '3ItBusterFireRate6', '3ItBusterFireRate30', '3ItBusterFireRate60',]],
      [['3ItBusterDashShot1', '3ItBusterDashShotUnlimited',]],
      [['3ItCharge75', '3ItCharge100', '3ItCharge125', '3ItCharge150',]],
    ],
    'subbosses': [
      // vff/bit ['0x23D']
      ['', '', '3ItKeyVajurila'],
      // mbb/byte ['0x23E']
      ['', '', '3ItKeyMandarela'],
      // vava ['0x23C', '0x23F']
      ['3ItKeyVavaStage', '', '3ItKeyVava'],
    ],
    'ridearmor': [
      // f ['0x257']
      ['3ItRideArmorF'],
      // h ['0x256']
      ['3ItRideArmorH'],
      // k ['0x255']
      ['3ItRideArmorK'],
      // n ['0x254']
      ['3ItRideArmorN'],
    ],
    'sigmaBosses': [
      [[
        '3ChOPClear', '3ChS1Clear1', '3ChS1Clear2', '3ChS2Clear1', '3ChS2Clear2', '3ChS3Clear',
      ]]
    ],
    'allClear': [
      ['', '3SFinalClear', '', '3SFinalClear']
    ]
  },
  'miscellaneous': {
    'sigma': [
      [[
        '1ItKeyS1', '1ItKeyS2', '1ItKeyS3', '1ItKeyS4', '1ItKeyS5', '1ItKeyS6', '1ItKeyS7', '1ItKeyS8', '1ItKeyS9', '1ItKeyS10', '1ItKeyS11', '1ItKeyS12', '1ItKeyS13',
        '2ItKeyS1', '2ItKeyS2', '2ItKeyS3', '2ItKeyS4', '2ItKeyS5', '2ItKeyS6', '2ItKeyS7', '2ItKeyS8', '2ItKeyS9', '2ItKeyS10', '2ItKeyS11', '2ItKeyS12', '2ItKeyS13',
        '3ItKeyS1', '3ItKeyS2', '3ItKeyS3', '3ItKeyS4', '3ItKeyS5', '3ItKeyS6', '3ItKeyS7', '3ItKeyS8', '3ItKeyS9', '3ItKeyS10', '3ItKeyS11', '3ItKeyS12', '3ItKeyS13', '3ItKeyS14',
      ]],
      [[
        "MItKeyS1", "MItKeyS2", "MItKeyS3", "MItKeyS4", "MItKeyS5", "MItKeyS6", "MItKeyS7", "MItKeyS8", "MItKeyS9", "MItKeyS10", "MItKeyS11", "MItKeyS12", "MItKeyS13",
        "MItKeyS14", "MItKeyS15", "MItKeyS16", "MItKeyS17", "MItKeyS18", "MItKeyS19", "MItKeyS20", "MItKeyS21", "MItKeyS22", "MItKeyS23", "MItKeyS24", "MItKeyS25", "MItKeyS26",
        "MItKeyS27", "MItKeyS28", "MItKeyS29", "MItKeyS30", "MItKeyS31", "MItKeyS32", "MItKeyS33", "MItKeyS34", "MItKeyS35", "MItKeyS36", "MItKeyS37", "MItKeyS38", "MItKeyS39", "MItKeyS40"
      ]]
    ],
    'hp': [
      [[
        '1ItLifeUp1', '1ItLifeUp2', '1ItLifeUp3', '1ItLifeUp4', '1ItLifeUp5', '1ItLifeUp6', '1ItLifeUp7', '1ItLifeUp8',
        '1ItLifeUpD1', '1ItLifeUpD2', '1ItLifeUpD3', '1ItLifeUpD4', '1ItLifeUpD5', '1ItLifeUpD6',
        '2ItLifeUp1', '2ItLifeUp2', '2ItLifeUp3', '2ItLifeUp4', '2ItLifeUp5', '2ItLifeUp6', '2ItLifeUp7', '2ItLifeUp8',
        '2ItLifeUpD1', '2ItLifeUpD2', '2ItLifeUpD3', '2ItLifeUpD4', '2ItLifeUpD5', '2ItLifeUpD6',
        '3ItLifeUp1', '3ItLifeUp2', '3ItLifeUp3', '3ItLifeUp4', '3ItLifeUp5', '3ItLifeUp6', '3ItLifeUp7', '3ItLifeUp8',
        '3ItLifeUpD1', '3ItLifeUpD2', '3ItLifeUpD3', '3ItLifeUpD4', '3ItLifeUpD5', '3ItLifeUpD6',
      ]],
      [[
        "MItLifeUp1", "MItLifeUp2", "MItLifeUp3", "MItLifeUp4", "MItLifeUp5", "MItLifeUp6", "MItLifeUp7", "MItLifeUp8",
        "MItLifeUpD1", "MItLifeUpD2", "MItLifeUpD3", "MItLifeUpD4", "MItLifeUpD5", "MItLifeUpD6",
        "MItLifeUp9", "MItLifeUp10", "MItLifeUp11", "MItLifeUp12", "MItLifeUp13", "MItLifeUp14", "MItLifeUp15", "MItLifeUp16",
        "MItLifeUpD7", "MItLifeUpD8", "MItLifeUpD9", "MItLifeUpD10", "MItLifeUpD11", "MItLifeUpD12",
        "MItLifeUp17", "MItLifeUp18", "MItLifeUp19", "MItLifeUp20", "MItLifeUp21", "MItLifeUp22", "MItLifeUp23", "MItLifeUp24",
        "MItLifeUpD13", "MItLifeUpD14", "MItLifeUpD15", "MItLifeUpD16", "MItLifeUpD17", "MItLifeUpD18",
      ]]
    ],
    'wp': [
      [[
        '1ItEnergyUp1', '1ItEnergyUp2', '1ItEnergyUp3', '1ItEnergyUp4', '1ItEnergyUp5', '1ItEnergyUp6', '1ItEnergyUp7', '1ItEnergyUp8', '1ItEnergyUp9', '1ItEnergyUp10', '1ItEnergyUp11', '1ItEnergyUp12', '1ItEnergyUp13', '1ItEnergyUp14',
        '2ItEnergyUp1', '2ItEnergyUp2', '2ItEnergyUp3', '2ItEnergyUp4', '2ItEnergyUp5', '2ItEnergyUp6', '2ItEnergyUp7', '2ItEnergyUp8', '2ItEnergyUp9', '2ItEnergyUp10', '2ItEnergyUp11', '2ItEnergyUp12', '2ItEnergyUp13', '2ItEnergyUp14',
        '3ItEnergyUp1', '3ItEnergyUp2', '3ItEnergyUp3', '3ItEnergyUp4', '3ItEnergyUp5', '3ItEnergyUp6', '3ItEnergyUp7', '3ItEnergyUp8', '3ItEnergyUp9', '3ItEnergyUp10', '3ItEnergyUp11', '3ItEnergyUp12', '3ItEnergyUp13', '3ItEnergyUp14',
      ]],
      [[
        "MItEnergyUp1", "MItEnergyUp2", "MItEnergyUp3", "MItEnergyUp4", "MItEnergyUp5", "MItEnergyUp6", "MItEnergyUp7", "MItEnergyUp8", "MItEnergyUp9", "MItEnergyUp10", "MItEnergyUp11", "MItEnergyUp12", "MItEnergyUp13", "MItEnergyUp14",
        "MItEnergyUp15", "MItEnergyUp16", "MItEnergyUp17", "MItEnergyUp18", "MItEnergyUp19", "MItEnergyUp20", "MItEnergyUp21", "MItEnergyUp22", "MItEnergyUp23", "MItEnergyUp24", "MItEnergyUp25", "MItEnergyUp26", "MItEnergyUp27", "MItEnergyUp28",
        "MItEnergyUp29", "MItEnergyUp30", "MItEnergyUp31", "MItEnergyUp32", "MItEnergyUp33", "MItEnergyUp34", "MItEnergyUp35", "MItEnergyUp36", "MItEnergyUp37", "MItEnergyUp38", "MItEnergyUp39", "MItEnergyUp40", "MItEnergyUp41", "MItEnergyUp42"
      ]]
    ],
    'd': [['SDeathCount']],
    'igf': [['SIfg']],
    'title': [['SCurrentTitle']],
    'x1Enabled': [['1Enabled']],
    'x2Enabled': [['2Enabled']],
    'x3Enabled': [['3Enabled']],
  },
}
export const translationMapping = {
  'x1': {
    'bosses': [
      // unlocked, beaten, changed
      // lo
      ['[1]鑰匙: 魚雷章魚', ''],
      // sc
      ['[1]鑰匙: 針刺變色龍', '', '[1]變化: 針刺變色龍 關卡變化'],
      // aa
      ['[1]鑰匙: 裝甲犰狳', ''],
      // bn/fm
      ['[1]鑰匙: 燃燒猛獁', '', '[1]變化: 燃燒猛獁 關卡變化'],
      // se
      ['[1]鑰匙: 暴風鐵鷹', ''],
      // sm
      ['[1]鑰匙: 火花山魈', '', '[1]變化: 火花山魈 關卡變化'],
      // bk
      ['[1]鑰匙: 回力鏢鍬型蟲', ''],
      // ip/cp
      ['[1]鑰匙: 冰凍企鵝', '']
    ],
    'weapon': [
      // lo
      ['[1]武器: 魚雷章魚'],
      // sc
      ['[1]武器: 針刺變色龍'],
      // aa
      ['[1]武器: 裝甲犰狳'],
      // bn/fm
      ['[1]武器: 燃燒猛獁'],
      // se
      ['[1]武器: 暴風鐵鷹'],
      // sm
      ['[1]武器: 火花山魈'],
      // bk
      ['[1]武器: 回力鏢鍬型蟲'],
      // ip/cp
      ['[1]武器: 冰凍企鵝']
    ],
    'armor': [
      // head
      ['[1]頭部裝備', '', '', ''],
      // arm
      ['[1]手部裝備', '', '', ''],
      // body
      ['[1]身體裝備', '', '', ''],
      // foot
      ['[1]腳部裝備', '', '', ''],
    ],
    'super': [
      // hadou
      ['[1]波動拳']
    ],
    'hp': [
      [[
        '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升',
        '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升', '[1]生命提升',
      ]],
    ],
    'wp': [
      [[
        '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升', '[1]能源提升',
      ]],
    ],
    'sigma': [
      [[
        '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙', '[1]西格瑪鑰匙',
      ]],
    ],
    'e': [
      [['[1]E罐', '[1]E罐', '[1]E罐', '[1]E罐']]
    ],
    'b': [
      [['[1]X飛彈數量上升', '[1]X飛彈數量上升', '[1]X飛彈數量上升', '[1]X飛彈數量上升', '[1]X飛彈數量上升',]],
      [['[1]X飛彈威力強化', '[1]X飛彈威力強化',]],
      [['[1]X飛彈連發速率強化', '[1]X飛彈連發速率強化', '[1]X飛彈連發速率強化', '[1]X飛彈連發速率強化', '[1]X飛彈連發速率強化', '[1]X飛彈連發速率強化',]],
      [['[1]衝刺飛彈數量上升', '[1]衝刺飛彈數量上升',]],
      [['[1]蓄力速度加快', '[1]蓄力速度加快', '[1]蓄力速度加快', '[1]蓄力速度加快',]],
    ],
  },
  'x2': {
    'bosses': [
      // mm
      ['[2]鑰匙: 變型飛蛾', ''],
      // wh/ws
      ['[2]鑰匙: 鋼索絲瓜', ''],
      // bc
      ['[2]鑰匙: 泡沫螃蟹', ''],
      // fs
      ['[2]鑰匙: 烈焰雄鹿', ''],
      // mh/mc
      ['[2]鑰匙: 磁石蜈蚣', ''],
      // cm/cs
      ['[2]鑰匙: 水晶蝸牛', ''],
      // so,oo
      ['[2]鑰匙: 音速鴕鳥', ''],
      // wa/wg
      ['[2]鑰匙: 車輪短吻鱷', ''],
    ],
    'weapon': [
      // mm
      ['[2]武器: 變型飛蛾'],
      // wh/ws
      ['[2]武器: 鋼索絲瓜'],
      // bc
      ['[2]武器: 泡沫螃蟹'],
      // fs
      ['[2]武器: 烈焰雄鹿'],
      // mh/mc
      ['[2]武器: 磁石蜈蚣'],
      // cm/cs
      ['[2]武器: 水晶蝸牛'],
      // so,oo
      ['[2]武器: 音速鴕鳥'],
      // wa/wg
      ['[2]武器: 車輪短吻鱷'],
    ],
    'armor': [
      // head
      ['[2]頭部裝備', '', '', ''],
      // arm
      ['[2]手部裝備', '', '', ''],
      // body
      ['[2]身體裝備', '', '', ''],
      // foot
      ['[2]腳部裝備', '', '', ''],
      // shoryu
      ['[2]昇龍拳'],
    ],
    'hp': [
      [[
        '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升',
        '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升', '[2]生命提升',
      ]],
    ],
    'wp': [
      [[
        '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升', '[2]能源提升',
      ]],
    ],
    'sigma': [
      [[
        '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙', '[2]西格瑪鑰匙',
      ]],
    ],
    'e': [
      [['[2]E罐', '[2]E罐', '[2]E罐', '[2]E罐']]
    ],
    'b': [
      [['[2]X飛彈數量上升', '[2]X飛彈數量上升', '[2]X飛彈數量上升', '[2]X飛彈數量上升', '[2]X飛彈數量上升',]],
      [['[2]X飛彈威力強化', '[2]X飛彈威力強化',]],
      [['[2]X飛彈連發速率強化', '[2]X飛彈連發速率強化', '[2]X飛彈連發速率強化', '[2]X飛彈連發速率強化', '[2]X飛彈連發速率強化', '[2]X飛彈連發速率強化',]],
      [['[2]衝刺飛彈數量上升', '[2]衝刺飛彈數量上升',]],
      [['[2]蓄力速度加快', '[2]蓄力速度加快', '[2]蓄力速度加快', '[2]蓄力速度加快',]],
    ],
    'zero': [
      // head
      ['[2]傑洛頭部零件'],
      // body
      ['[2]傑洛身體零件'],
      // foot
      ['[2]傑洛腳部零件'],
    ]
  },
  'x3': {
    'bosses': [
      // eh/bh
      ['[3]鑰匙: 爆破黃蜂', '', '[3]變化: 爆破黃蜂 關卡變化'],
      // fb/bb
      ['[3]鑰匙: 冰凍水牛', '', '[3]變化: 冰凍水牛 關卡變化'],
      // gb
      ['[3]鑰匙: 重力獨角仙', '', '[3]變化: 重力獨角仙 關卡變化'],
      // as/ts
      ['[3]鑰匙: 酸性海馬', ''],
      // en/vc
      ['[3]鑰匙: 電氣鯰魚', ''],
      // ss/cc
      ['[3]鑰匙: 剪刀蝦', ''],
      // sm/tr
      ['[3]鑰匙: 螺旋犀牛', ''],
      // st/nt
      ['[3]鑰匙: 閃光虎', ''],
    ],
    'weapon': [
      // eh/bh
      ['[3]武器: 爆破黃蜂'],
      // fb/bb
      ['[3]武器: 冰凍水牛'],
      // gb
      ['[3]武器: 重力獨角仙'],
      // as/ts
      ['[3]武器: 酸性海馬'],
      // en/vc
      ['[3]武器: 電氣鯰魚'],
      // ss/cc
      ['[3]武器: 剪刀蝦'],
      // sm/tr
      ['[3]武器: 螺旋犀牛'],
      // st/nt
      ['[3]武器: 閃光虎'],
    ],
    'armor': [
      // head
      ['[3]頭部裝備', '', '', '[3]頭部裝備'],
      // arm
      ['[3]手部裝備', '', '', '[3]手部裝備'],
      // body
      ['[3]身體裝備', '', '', '[3]身體裝備'],
      // foot
      ['[3]腳部裝備', '', '', '[3]腳部裝備'],
      // saber
      ['[3]Z光束刀'],
    ],
    'hp': [
      [[
        '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升',
        '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升', '[3]生命提升',
      ]],
    ],
    'wp': [
      [[
        '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升', '[3]能源提升',
      ]]
    ],
    'sigma': [
      [[
        '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙', '[3]西格瑪鑰匙',
      ]]
    ],
    'e': [
      [['[3]E罐', '[3]E罐', '[3]E罐', '[3]E罐']]
    ],
    'b': [
      [['[3]X飛彈數量上升', '[3]X飛彈數量上升', '[3]X飛彈數量上升', '[3]X飛彈數量上升', '[3]X飛彈數量上升',]],
      [['[3]X飛彈威力強化', '[3]X飛彈威力強化',]],
      [['[3]X飛彈連發速率強化', '[3]X飛彈連發速率強化', '[3]X飛彈連發速率強化', '[3]X飛彈連發速率強化', '[3]X飛彈連發速率強化', '[3]X飛彈連發速率強化',]],
      [['[3]衝刺飛彈數量上升', '[3]衝刺飛彈數量上升',]],
      [['[3]蓄力速度加快', '[3]蓄力速度加快', '[3]蓄力速度加快', '[3]蓄力速度加快',]],
    ],
    'subbosses': [
      // vff/bit
      ['', '', '[3]變化: 擊殺瓦傑里拉FF'],
      // mbb/byte
      ['', '', '[3]變化: 擊殺曼達雷拉BB'],
      // vava
      ['[3]鑰匙: 霸法', '', '[3]變化: 擊殺霸法'],
    ],
    'ridearmor': [
      // f
      ['[3]騎乘裝甲-F-雨蛙號'],
      // h
      ['[3]騎乘裝甲-H-飛鷹號'],
      // k
      ['[3]騎乘裝甲-K-袋鼠號'],
      // n
      ['[3]騎乘裝甲-N-嵌合獸號'],
    ],
  },
  'miscellaneous': {
    'hp': [
      [],
      [[
        "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升",
        "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升",
        "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升", "[*]生命提升"
      ]]
    ],
    'wp': [
      [],
      [[
        "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升",
        "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升",
        "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升", "[*]能源提升"
      ]]
    ],
    'sigma': [
      [],
      [[
        "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙",
        "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙",
        "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙", "[*]西格瑪鑰匙"
      ]]
    ],
    'd': [[]],
    'igf': [[]],
    'title': [[]],
  },
}

export interface X1ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
  super: string
  sigmaBosses: string
}
export interface X1ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[]
  e: number[]
  b: number[]
  sigmaBosses: number[]
  allClear: number[]
}

export interface X2ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
  super: string
  zero: string[]
  sigmaBosses: string
}
export interface X2ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[]
  e: number[]
  b: number[]
  zero: boolean[]
  sigmaBosses: number[]
  allClear: number[]
}

export interface X3ImgSource {
  bosses: string[]
  weapon: string[]
  armor: string[]
  super: string
  subbosses: string[]
  ridearmor: string[]
  sigmaBosses: string
}
export interface X3ItemStatus {
  bosses: boolean[]
  weapon: boolean[]
  armor: boolean[]
  e: number[]
  b: number[]
  subbosses: boolean[]
  ridearmor: boolean[]
  sigmaBosses: number[]
  allClear: number[]
}

export interface MiscellaneousImgSource {
  sigma: string,
  hp: string,
  wp: string,
  b: string,
  d: string,
  igf: string,
}
export interface MiscellaneousItemStatus {
  sigma: number[],
  hp: number[],
  wp: number[],
  d: number[],
  igf: number[],
}