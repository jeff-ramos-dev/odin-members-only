const COUNTRY_CODES = {
	"Afghanistan": {
		code: "93",
		ISO: "AF / AFG"
	},
	"Albania": {
		code: "355",
		ISO: "AL / ALB"
	},
	"Algeria": {
		code: "213",
		ISO: "DZ / DZA"
	},
	"American Samoa": {
		code: "1-684",
		ISO: "AS / ASM"
	},
	"Andorra": {
		code: "376",
		ISO: "AD / AND"
	},
	"Angola": {
		code: "244",
		ISO: "AO / AGO"
	},
	"Anguilla": {
		code: "1-264",
		ISO: "AI / AIA"
	},
	"Antarctica": {
		code: "672",
		ISO: "AQ / ATA"
	},
	"Antigua and Barbuda": {
		code: "1-268",
		ISO: "AG / ATG"
	},
	"Argentina": {
		code: "54",
		ISO: "AR / ARG"
	},
	"Armenia": {
		code: "374",
		ISO: "AM / ARM"
	},
	"Aruba": {
		code: "297",
		ISO: "AW / ABW"
	},
	"Australia": {
		code: "61",
		ISO: "AU / AUS"
	},
	"Austria": {
		code: "43",
		ISO: "AT / AUT"
	},
	"Azerbaijan": {
		code: "994",
		ISO: "AZ / AZE"
	},
	"Bahamas": {
		code: "1-242",
		ISO: "BS / BHS"
	},
	"Bahrain": {
		code: "973",
		ISO: "BH / BHR"
	},
	"Bangladesh": {
		code: "880",
		ISO: "BD / BGD"
	},
	"Barbados": {
		code: "1-246",
		ISO: "BB / BRB"
	},
	"Belarus": {
		code: "375",
		ISO: "BY / BLR"
	},
	"Belgium": {
		code: "32",
		ISO: "BE / BEL"
	},
	"Belize": {
		code: "501",
		ISO: "BZ / BLZ"
	},
	"Benin": {
		code: "229",
		ISO: "BJ / BEN"
	},
	"Bermuda": {
		code: "1-441",
		ISO: "BM / BMU"
	},
	"Bhutan": {
		code: "975",
		ISO: "BT / BTN"
	},
	"Bolivia": {
		code: "591",
		ISO: "BO / BOL"
	},
	"Bosnia and Herzegovina": {
		code: "387",
		ISO: "BA / BIH"
	},
	"Botswana": {
		code: "267",
		ISO: "BW / BWA"
	},
	"Brazil": {
		code: "55",
		ISO: "BR / BRA"
	},
	"British Indian Ocean Territory": {
		code: "246",
		ISO: "IO / IOT"
	},
	"British Virgin Islands": {
		code: "1-284",
		ISO: "VG / VGB"
	},
	"Brunei": {
		code: "673",
		ISO: "BN / BRN"
	},
	"Bulgaria": {
		code: "359",
		ISO: "BG / BGR"
	},
	"Burkina Faso": {
		code: "226",
		ISO: "BF / BFA"
	},
	"Burundi": {
		code: "257",
		ISO: "BI / BDI"
	},
	"Cambodia": {
		code: "855",
		ISO: "KH / KHM"
	},
	"Cameroon": {
		code: "237",
		ISO: "CM / CMR"
	},
	"Canada": {
		code: "1",
		ISO: "CA / CAN"
	},
	"Cape Verde": {
		code: "238",
		ISO: "CV / CPV"
	},
	"Cayman Islands": {
		code: "1-345",
		ISO: "KY / CYM"
	},
	"Central African Republic": {
		code: "236",
		ISO: "CF / CAF"
	},
	"Chad": {
		code: "235",
		ISO: "TD / TCD"
	},
	"Chile": {
		code: "56",
		ISO: "CL / CHL"
	},
	"China": {
		code: "86",
		ISO: "CN / CHN"
	},
	"Christmas Island": {
		code: "61",
		ISO: "CX / CXR"
	},
	"Cocos Islands": {
		code: "61",
		ISO: "CC / CCK"
	},
	"Colombia": {
		code: "57",
		ISO: "CO / COL"
	},
	"Comoros": {
		code: "269",
		ISO: "KM / COM"
	},
	"Cook Islands": {
		code: "682",
		ISO: "CK / COK"
	},
	"Costa Rica": {
		code: "506",
		ISO: "CR / CRI"
	},
	"Croatia": {
		code: "385",
		ISO: "HR / HRV"
	},
	"Cuba": {
		code: "53",
		ISO: "CU / CUB"
	},
	"Curacao": {
		code: "599",
		ISO: "CW / CUW"
	},
	"Cyprus": {
		code: "357",
		ISO: "CY / CYP"
	},
	"Czech Republic": {
		code: "420",
		ISO: "CZ / CZE"
	},
	"Democratic Republic of the Congo": {
		code: "243",
		ISO: "CD / COD"
	},
	"Denmark": {
		code: "45",
		ISO: "DK / DNK"
	},
	"Djibouti": {
		code: "253",
		ISO: "DJ / DJI"
	},
	"Dominica": {
		code: "1-767",
		ISO: "DM / DMA"
	},
	"Dominican Republic": {
		code: "1-809, 1-829, 1-849",
		ISO: "DO / DOM"
	},
	"East Timor": {
		code: "670",
		ISO: "TL / TLS"
	},
	"Ecuador": {
		code: "593",
		ISO: "EC / ECU"
	},
	"Egypt": {
		code: "20",
		ISO: "EG / EGY"
	},
	"El Salvador": {
		code: "503",
		ISO: "SV / SLV"
	},
	"Equatorial Guinea": {
		code: "240",
		ISO: "GQ / GNQ"
	},
	"Eritrea": {
		code: "291",
		ISO: "ER / ERI"
	},
	"Estonia": {
		code: "372",
		ISO: "EE / EST"
	},
	"Ethiopia": {
		code: "251",
		ISO: "ET / ETH"
	},
	"Falkland Islands": {
		code: "500",
		ISO: "FK / FLK"
	},
	"Faroe Islands": {
		code: "298",
		ISO: "FO / FRO"
	},
	"Fiji": {
		code: "679",
		ISO: "FJ / FJI"
	},
	"Finland": {
		code: "358",
		ISO: "FI / FIN"
	},
	"France": {
		code: "33",
		ISO: "FR / FRA"
	},
	"French Polynesia": {
		code: "689",
		ISO: "PF / PYF"
	},
	"Gabon": {
		code: "241",
		ISO: "GA / GAB"
	},
	"Gambia": {
		code: "220",
		ISO: "GM / GMB"
	},
	"Georgia": {
		code: "995",
		ISO: "GE / GEO"
	},
	"Germany": {
		code: "49",
		ISO: "DE / DEU"
	},
	"Ghana": {
		code: "233",
		ISO: "GH / GHA"
	},
	"Gibraltar": {
		code: "350",
		ISO: "GI / GIB"
	},
	"Greece": {
		code: "30",
		ISO: "GR / GRC"
	},
	"Greenland": {
		code: "299",
		ISO: "GL / GRL"
	},
	"Grenada": {
		code: "1-473",
		ISO: "GD / GRD"
	},
	"Guam": {
		code: "1-671",
		ISO: "GU / GUM"
	},
	"Guatemala": {
		code: "502",
		ISO: "GT / GTM"
	},
	"Guernsey": {
		code: "44-1481",
		ISO: "GG / GGY"
	},
	"Guinea": {
		code: "224",
		ISO: "GN / GIN"
	},
	"Guinea-Bissau": {
		code: "245",
		ISO: "GW / GNB"
	},
	"Guyana": {
		code: "592",
		ISO: "GY / GUY"
	},
	"Haiti": {
		code: "509",
		ISO: "HT / HTI"
	},
	"Honduras": {
		code: "504",
		ISO: "HN / HND"
	},
	"Hong Kong": {
		code: "852",
		ISO: "HK / HKG"
	},
	"Hungary": {
		code: "36",
		ISO: "HU / HUN"
	},
	"Iceland": {
		code: "354",
		ISO: "IS / ISL"
	},
	"India": {
		code: "91",
		ISO: "IN / IND"
	},
	"Indonesia": {
		code: "62",
		ISO: "ID / IDN"
	},
	"Iran": {
		code: "98",
		ISO: "IR / IRN"
	},
	"Iraq": {
		code: "964",
		ISO: "IQ / IRQ"
	},
	"Ireland": {
		code: "353",
		ISO: "IE / IRL"
	},
	"Isle of Man": {
		code: "44-1624",
		ISO: "IM / IMN"
	},
	"Israel": {
		code: "972",
		ISO: "IL / ISR"
	},
	"Italy": {
		code: "39",
		ISO: "IT / ITA"
	},
	"Ivory Coast": {
		code: "225",
		ISO: "CI / CIV"
	},
	"Jamaica": {
		code: "1-876",
		ISO: "JM / JAM"
	},
	"Japan": {
		code: "81",
		ISO: "JP / JPN"
	},
	"Jersey": {
		code: "44-1534",
		ISO: "JE / JEY"
	},
	"Jordan": {
		code: "962",
		ISO: "JO / JOR"
	},
	"Kazakhstan": {
		code: "7",
		ISO: "KZ / KAZ"
	},
	"Kenya": {
		code: "254",
		ISO: "KE / KEN"
	},
	"Kiribati": {
		code: "686",
		ISO: "KI / KIR"
	},
	"Kosovo": {
		code: "383",
		ISO: "XK / XKX"
	},
	"Kuwait": {
		code: "965",
		ISO: "KW / KWT"
	},
	"Kyrgyzstan": {
		code: "996",
		ISO: "KG / KGZ"
	},
	"Laos": {
		code: "856",
		ISO: "LA / LAO"
	},
	"Latvia": {
		code: "371",
		ISO: "LV / LVA"
	},
	"Lebanon": {
		code: "961",
		ISO: "LB / LBN"
	},
	"Lesotho": {
		code: "266",
		ISO: "LS / LSO"
	},
	"Liberia": {
		code: "231",
		ISO: "LR / LBR"
	},
	"Libya": {
		code: "218",
		ISO: "LY / LBY"
	},
	"Liechtenstein": {
		code: "423",
		ISO: "LI / LIE"
	},
	"Lithuania": {
		code: "370",
		ISO: "LT / LTU"
	},
	"Luxembourg": {
		code: "352",
		ISO: "LU / LUX"
	},
	"Macau": {
		code: "853",
		ISO: "MO / MAC"
	},
	"Macedonia": {
		code: "389",
		ISO: "MK / MKD"
	},
	"Madagascar": {
		code: "261",
		ISO: "MG / MDG"
	},
	"Malawi": {
		code: "265",
		ISO: "MW / MWI"
	},
	"Malaysia": {
		code: "60",
		ISO: "MY / MYS"
	},
	"Maldives": {
		code: "960",
		ISO: "MV / MDV"
	},
	"Mali": {
		code: "223",
		ISO: "ML / MLI"
	},
	"Malta": {
		code: "356",
		ISO: "MT / MLT"
	},
	"Marshall Islands": {
		code: "692",
		ISO: "MH / MHL"
	},
	"Mauritania": {
		code: "222",
		ISO: "MR / MRT"
	},
	"Mauritius": {
		code: "230",
		ISO: "MU / MUS"
	},
	"Mayotte": {
		code: "262",
		ISO: "YT / MYT"
	},
	"Mexico": {
		code: "52",
		ISO: "MX / MEX"
	},
	"Micronesia": {
		code: "691",
		ISO: "FM / FSM"
	},
	"Moldova": {
		code: "373",
		ISO: "MD / MDA"
	},
	"Monaco": {
		code: "377",
		ISO: "MC / MCO"
	},
	"Mongolia": {
		code: "976",
		ISO: "MN / MNG"
	},
	"Montenegro": {
		code: "382",
		ISO: "ME / MNE"
	},
	"Montserrat": {
		code: "1-664",
		ISO: "MS / MSR"
	},
	"Morocco": {
		code: "212",
		ISO: "MA / MAR"
	},
	"Mozambique": {
		code: "258",
		ISO: "MZ / MOZ"
	},
	"Myanmar": {
		code: "95",
		ISO: "MM / MMR"
	},
	"Namibia": {
		code: "264",
		ISO: "NA / NAM"
	},
	"Nauru": {
		code: "674",
		ISO: "NR / NRU"
	},
	"Nepal": {
		code: "977",
		ISO: "NP / NPL"
	},
	"Netherlands": {
		code: "31",
		ISO: "NL / NLD"
	},
	"Netherlands Antilles": {
		code: "599",
		ISO: "AN / ANT"
	},
	"New Caledonia": {
		code: "687",
		ISO: "NC / NCL"
	},
	"New Zealand": {
		code: "64",
		ISO: "NZ / NZL"
	},
	"Nicaragua": {
		code: "505",
		ISO: "NI / NIC"
	},
	"Niger": {
		code: "227",
		ISO: "NE / NER"
	},
	"Nigeria": {
		code: "234",
		ISO: "NG / NGA"
	},
	"Niue": {
		code: "683",
		ISO: "NU / NIU"
	},
	"North Korea": {
		code: "850",
		ISO: "KP / PRK"
	},
	"Northern Mariana Islands": {
		code: "1-670",
		ISO: "MP / MNP"
	},
	"Norway": {
		code: "47",
		ISO: "NO / NOR"
	},
	"Oman": {
		code: "968",
		ISO: "OM / OMN"
	},
	"Pakistan": {
		code: "92",
		ISO: "PK / PAK"
	},
	"Palau": {
		code: "680",
		ISO: "PW / PLW"
	},
	"Palestine": {
		code: "970",
		ISO: "PS / PSE"
	},
	"Panama": {
		code: "507",
		ISO: "PA / PAN"
	},
	"Papua New Guinea": {
		code: "675",
		ISO: "PG / PNG"
	},
	"Paraguay": {
		code: "595",
		ISO: "PY / PRY"
	},
	"Peru": {
		code: "51",
		ISO: "PE / PER"
	},
	"Philippines": {
		code: "63",
		ISO: "PH / PHL"
	},
	"Pitcairn": {
		code: "64",
		ISO: "PN / PCN"
	},
	"Poland": {
		code: "48",
		ISO: "PL / POL"
	},
	"Portugal": {
		code: "351",
		ISO: "PT / PRT"
	},
	"Puerto Rico": {
		code: "1-787, 1-939",
		ISO: "PR / PRI"
	},
	"Qatar": {
		code: "974",
		ISO: "QA / QAT"
	},
	"Republic of the Congo": {
		code: "242",
		ISO: "CG / COG"
	},
	"Reunion": {
		code: "262",
		ISO: "RE / REU"
	},
	"Romania": {
		code: "40",
		ISO: "RO / ROU"
	},
	"Russia": {
		code: "7",
		ISO: "RU / RUS"
	},
	"Rwanda": {
		code: "250",
		ISO: "RW / RWA"
	},
	"Saint Barthelemy": {
		code: "590",
		ISO: "BL / BLM"
	},
	"Saint Helena": {
		code: "290",
		ISO: "SH / SHN"
	},
	"Saint Kitts and Nevis": {
		code: "1-869",
		ISO: "KN / KNA"
	},
	"Saint Lucia": {
		code: "1-758",
		ISO: "LC / LCA"
	},
	"Saint Martin": {
		code: "590",
		ISO: "MF / MAF"
	},
	"Saint Pierre and Miquelon": {
		code: "508",
		ISO: "PM / SPM"
	},
	"Saint Vincent and the Grenadines": {
		code: "1-784",
		ISO: "VC / VCT"
	},
	"Samoa": {
		code: "685",
		ISO: "WS / WSM"
	},
	"San Marino": {
		code: "378",
		ISO: "SM / SMR"
	},
	"Sao Tome and Principe": {
		code: "239",
		ISO: "ST / STP"
	},
	"Saudi Arabia": {
		code: "966",
		ISO: "SA / SAU"
	},
	"Senegal": {
		code: "221",
		ISO: "SN / SEN"
	},
	"Serbia": {
		code: "381",
		ISO: "RS / SRB"
	},
	"Seychelles": {
		code: "248",
		ISO: "SC / SYC"
	},
	"Sierra Leone": {
		code: "232",
		ISO: "SL / SLE"
	},
	"Singapore": {
		code: "65",
		ISO: "SG / SGP"
	},
	"Sint Maarten": {
		code: "1-721",
		ISO: "SX / SXM"
	},
	"Slovakia": {
		code: "421",
		ISO: "SK / SVK"
	},
	"Slovenia": {
		code: "386",
		ISO: "SI / SVN"
	},
	"Solomon Islands": {
		code: "677",
		ISO: "SB / SLB"
	},
	"Somalia": {
		code: "252",
		ISO: "SO / SOM"
	},
	"South Africa": {
		code: "27",
		ISO: "ZA / ZAF"
	},
	"South Korea": {
		code: "82",
		ISO: "KR / KOR"
	},
	"South Sudan": {
		code: "211",
		ISO: "SS / SSD"
	},
	"Spain": {
		code: "34",
		ISO: "ES / ESP"
	},
	"Sri Lanka": {
		code: "94",
		ISO: "LK / LKA"
	},
	"Sudan": {
		code: "249",
		ISO: "SD / SDN"
	},
	"Suriname": {
		code: "597",
		ISO: "SR / SUR"
	},
	"Svalbard and Jan Mayen": {
		code: "47",
		ISO: "SJ / SJM"
	},
	"Swaziland": {
		code: "268",
		ISO: "SZ / SWZ"
	},
	"Sweden": {
		code: "46",
		ISO: "SE / SWE"
	},
	"Switzerland": {
		code: "41",
		ISO: "CH / CHE"
	},
	"Syria": {
		code: "963",
		ISO: "SY / SYR"
	},
	"Taiwan": {
		code: "886",
		ISO: "TW / TWN"
	},
	"Tajikistan": {
		code: "992",
		ISO: "TJ / TJK"
	},
	"Tanzania": {
		code: "255",
		ISO: "TZ / TZA"
	},
	"Thailand": {
		code: "66",
		ISO: "TH / THA"
	},
	"Togo": {
		code: "228",
		ISO: "TG / TGO"
	},
	"Tokelau": {
		code: "690",
		ISO: "TK / TKL"
	},
	"Tonga": {
		code: "676",
		ISO: "TO / TON"
	},
	"Trinidad and Tobago": {
		code: "1-868",
		ISO: "TT / TTO"
	},
	"Tunisia": {
		code: "216",
		ISO: "TN / TUN"
	},
	"Turkey": {
		code: "90",
		ISO: "TR / TUR"
	},
	"Turkmenistan": {
		code: "993",
		ISO: "TM / TKM"
	},
	"Turks and Caicos Islands": {
		code: "1-649",
		ISO: "TC / TCA"
	},
	"Tuvalu": {
		code: "688",
		ISO: "TV / TUV"
	},
	"U.S. Virgin Islands": {
		code: "1-340",
		ISO: "VI / VIR"
	},
	"Uganda": {
		code: "256",
		ISO: "UG / UGA"
	},
	"Ukraine": {
		code: "380",
		ISO: "UA / UKR"
	},
	"United Arab Emirates": {
		code: "971",
		ISO: "AE / ARE"
	},
	"United Kingdom": {
		code: "44",
		ISO: "GB / GBR"
	},
	"United States": {
		code: "1",
		ISO: "US / USA"
	},
	"Uruguay": {
		code: "598",
		ISO: "UY / URY"
	},
	"Uzbekistan": {
		code: "998",
		ISO: "UZ / UZB"
	},
	"Vanuatu": {
		code: "678",
		ISO: "VU / VUT"
	},
	"Vatican": {
		code: "379",
		ISO: "VA / VAT"
	},
	"Venezuela": {
		code: "58",
		ISO: "VE / VEN"
	},
	"Vietnam": {
		code: "84",
		ISO: "VN / VNM"
	},
	"Wallis and Futuna": {
		code: "681",
		ISO: "WF / WLF"
	},
	"Western Sahara": {
		code: "212",
		ISO: "EH / ESH"
	},
	"Yemen": {
		code: "967",
		ISO: "YE / YEM"
	},
	"Zambia": {
		code: "260",
		ISO: "ZM / ZMB"
	},
	"Zimbabwe": {
		code: "263",
		ISO: "ZW / ZWE"
	}
}

module.exports = {
	COUNTRY_CODES
}