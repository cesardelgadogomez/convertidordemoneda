const cantidad = document.querySelector("#cantidad");
const cantidadConvertida = document.querySelector("#cantidad-convertida");
const fromCurrency = document.querySelector("#from-currency");
const toCurrency = document.querySelector("#to-currency");
const resultado = document.querySelector("#resultado-texto");

const paises = [
  { codigo: "USD", nombre: "Dólar Estadounidense" },
  { codigo: "COP", nombre: "Peso Colombiano" },
  { codigo: "EUR", nombre: "Euro" },
  { codigo: "GBP", nombre: "Libra Esterlina" },
  { codigo: "JPY", nombre: "Yen Japonés" },
  { codigo: "CNY", nombre: "Yuan Chino" },
  { codigo: "AUD", nombre: "Dólar Australiano" },
  { codigo: "CAD", nombre: "Dólar Canadiense" },
  { codigo: "CHF", nombre: "Franco Suizo" },
  { codigo: "BRL", nombre: "Real Brasileño" },
  { codigo: "MXN", nombre: "Peso Mexicano" },
  { codigo: "ARS", nombre: "Peso Argentino" },
  { codigo: "CLP", nombre: "Peso Chileno" },
  { codigo: "PEN", nombre: "Sol Peruano" },
  { codigo: "INR", nombre: "Rupia India" },
  { codigo: "RUB", nombre: "Rublo Ruso" },
  { codigo: "ZAR", nombre: "Rand Sudafricano" },
  { codigo: "KRW", nombre: "Won Surcoreano" },
  { codigo: "SGD", nombre: "Dólar de Singapur" },
  { codigo: "HKD", nombre: "Dólar de Hong Kong" },
  { codigo: "NZD", nombre: "Dólar Neozelandés" },
  { codigo: "TRY", nombre: "Lira Turca" },
  { codigo: "SEK", nombre: "Corona Sueca" },
  { codigo: "NOK", nombre: "Corona Noruega" },
  { codigo: "DKK", nombre: "Corona Danesa" },
  { codigo: "PLN", nombre: "Zloty Polaco" },
  { codigo: "THB", nombre: "Baht Tailandés" },
  { codigo: "IDR", nombre: "Rupia Indonesia" },
  { codigo: "MYR", nombre: "Ringgit Malayo" },
  { codigo: "PHP", nombre: "Peso Filipino" },
  { codigo: "VND", nombre: "Dong Vietnamita" },
  { codigo: "EGP", nombre: "Libra Egipcia" },
  { codigo: "ILS", nombre: "Séquel Israelí" },
  { codigo: "SAR", nombre: "Riyal Saudí" },
  { codigo: "AED", nombre: "Dírham de Emiratos Árabes" },
  { codigo: "TWD", nombre: "Dólar Taiwanés" },
  { codigo: "VEF", nombre: "Bolívar Venezolano" },
  { codigo: "BOB", nombre: "Boliviano" },
  { codigo: "PYG", nombre: "Guaraní Paraguayo" },
  { codigo: "UYU", nombre: "Peso Uruguayo" },
  { codigo: "CRC", nombre: "Colón Costarricense" },
  { codigo: "GTQ", nombre: "Quetzal Guatemalteco" },
  { codigo: "HNL", nombre: "Lempira Hondureña" },
  { codigo: "NIO", nombre: "Córdoba Nicaragüense" },
  { codigo: "DOP", nombre: "Peso Dominicano" },
  { codigo: "CUP", nombre: "Peso Cubano" },
  { codigo: "MAD", nombre: "Dírham Marroquí" },
  { codigo: "DZD", nombre: "Dinar Argelino" },
  { codigo: "TND", nombre: "Dinar Tunecino" },
  { codigo: "NGN", nombre: "Naira Nigeriana" },
  { codigo: "GHS", nombre: "Cedi Ghanés" },
  { codigo: "KES", nombre: "Chelín Keniano" },
  { codigo: "UGX", nombre: "Chelín Ugandés" },
  { codigo: "ETB", nombre: "Birr Etíope" },
  { codigo: "BDT", nombre: "Taka Bangladesí" },
  { codigo: "PKR", nombre: "Rupia Pakistaní" },
  { codigo: "LKR", nombre: "Rupia de Sri Lanka" },
  { codigo: "NPR", nombre: "Rupia Nepalí" },
  { codigo: "MMK", nombre: "Kyat de Myanmar" },
  { codigo: "KWD", nombre: "Dinar Kuwaití" },
  { codigo: "QAR", nombre: "Riyal Qatarí" },
  { codigo: "BHD", nombre: "Dinar Bahreiní" },
  { codigo: "OMR", nombre: "Rial Omaní" },
  { codigo: "JOD", nombre: "Dinar Jordano" },
  { codigo: "HUF", nombre: "Forinto Húngaro" },
  { codigo: "CZK", nombre: "Corona Checa" },
  { codigo: "RON", nombre: "Leu Rumano" },
  { codigo: "BGN", nombre: "Lev Búlgaro" },
  { codigo: "HRK", nombre: "Kuna Croata" },
  { codigo: "ISK", nombre: "Corona Islandesa" },
  { codigo: "XAF", nombre: "Franco CFA de África Central" },
  { codigo: "XOF", nombre: "Franco CFA de África Occidental" },
  { codigo: "XPF", nombre: "Franco CFP" },
  { codigo: "BBD", nombre: "Dólar de Barbados" },
  { codigo: "BMD", nombre: "Dólar de Bermudas" },
  { codigo: "BSD", nombre: "Dólar de Bahamas" },
  { codigo: "FJD", nombre: "Dólar de Fiyi" },
  { codigo: "SBD", nombre: "Dólar de Islas Salomón" },
  { codigo: "TTD", nombre: "Dólar de Trinidad y Tobago" },
  { codigo: "ZMW", nombre: "Kwacha Zambiano" },
  { codigo: "MUR", nombre: "Rupia de Mauricio" },
  { codigo: "MVR", nombre: "Rufiyaa Maldiva" },
  { codigo: "MNT", nombre: "Tugrik Mongol" },
  { codigo: "KZT", nombre: "Tenge Kazajo" },
  { codigo: "GEL", nombre: "Lari Georgiano" },
  { codigo: "AMD", nombre: "Dram Armenio" },
  { codigo: "AZN", nombre: "Manat Azerbaiyano" },
  { codigo: "BYN", nombre: "Rublo Bielorruso" },
  { codigo: "UAH", nombre: "Grivna Ucraniana" },
  { codigo: "ALL", nombre: "Lek Albanés" },
  { codigo: "ANG", nombre: "Florín Antillano" },
  { codigo: "AOA", nombre: "Kwanza Angoleño" },
  { codigo: "AWG", nombre: "Florín de Aruba" },
  { codigo: "BAM", nombre: "Marco Convertible Bosnio" },
  { codigo: "BWP", nombre: "Pula Botswana" },
  { codigo: "CDF", nombre: "Franco Congoleño" },
  { codigo: "CVE", nombre: "Escudo Caboverdiano" },
  { codigo: "DJF", nombre: "Franco de Yibuti" },
  { codigo: "ERN", nombre: "Nakfa Eritrea" },
  { codigo: "GMD", nombre: "Dalasi Gambiano" },
  { codigo: "HTG", nombre: "Gourde Haitiano" },
  { codigo: "IQD", nombre: "Dinar Iraquí" },
  { codigo: "JMD", nombre: "Dólar Jamaicano" },
  { codigo: "KGS", nombre: "Som Kirguís" },
  { codigo: "KHR", nombre: "Riel Camboyano" },
  { codigo: "KMF", nombre: "Franco Comorano" },
  { codigo: "KPW", nombre: "Won Norcoreano" },
  { codigo: "KYD", nombre: "Dólar de Islas Caimán" },
  { codigo: "LAK", nombre: "Kip Laosiano" },
  { codigo: "LBP", nombre: "Libra Libanesa" },
  { codigo: "LSL", nombre: "Loti Lesotense" },
  { codigo: "LYD", nombre: "Dinar Libio" },
  { codigo: "MDL", nombre: "Leu Moldavo" },
  { codigo: "MGA", nombre: "Ariary Malgache" },
  { codigo: "MKD", nombre: "Denar Macedonio" },
  { codigo: "MOP", nombre: "Pataca de Macao" },
  { codigo: "MWK", nombre: "Kwacha Malauí" },
  { codigo: "NAD", nombre: "Dólar Namibio" },
  { codigo: "PGK", nombre: "Kina de Papúa Nueva Guinea" },
  { codigo: "RSD", nombre: "Dinar Serbio" },
  { codigo: "SCR", nombre: "Rupia de Seychelles" },
  { codigo: "SDG", nombre: "Libra Sudanesa" },
  { codigo: "SLL", nombre: "Leone de Sierra Leona" },
  { codigo: "SOS", nombre: "Chelín Somalí" },
  { codigo: "SRD", nombre: "Dólar de Surinam" },
  { codigo: "SSP", nombre: "Libra de Sudán del Sur" },
  { codigo: "SVC", nombre: "Colón Salvadoreño" },
  { codigo: "SYP", nombre: "Libra Siria" },
  { codigo: "SZL", nombre: "Lilangeni Suazi" },
  { codigo: "TJS", nombre: "Somoni Tayiko" },
  { codigo: "TMT", nombre: "Manat Turcomano" },
  { codigo: "TOP", nombre: "Paʻanga Tongano" },
  { codigo: "TZS", nombre: "Chelín Tanzano" },
  { codigo: "UZS", nombre: "Som Uzbeko" },
  { codigo: "VUV", nombre: "Vatu Vanuatuense" },
  { codigo: "WST", nombre: "Tala Samoano" },
  { codigo: "XCD", nombre: "Dólar del Caribe Oriental" },
  { codigo: "YER", nombre: "Rial Yemení" },
  { codigo: "ZWL", nombre: "Dólar Zimbabuense" },
 /*  { codigo: "BTC", nombre: "Bitcoin" },
  { codigo: "ETH", nombre: "Ethereum" },
  { codigo: "USDT", nombre: "Tether" },
  { codigo: "BNB", nombre: "Binance Coin" },
  { codigo: "XRP", nombre: "Ripple" },
  { codigo: "ADA", nombre: "Cardano" },
  { codigo: "SOL", nombre: "Solana" },
  { codigo: "DOGE", nombre: "Dogecoin" },
  { codigo: "DOT", nombre: "Polkadot" },
  { codigo: "MATIC", nombre: "Polygon" },
  { codigo: "AVAX", nombre: "Avalanche" },
  { codigo: "LTC", nombre: "Litecoin" },
  { codigo: "BCH", nombre: "Bitcoin Cash" },
  { codigo: "LINK", nombre: "Chainlink" },
  { codigo: "ALGO", nombre: "Algorand" },
  { codigo: "XLM", nombre: "Stellar" },
  { codigo: "TRX", nombre: "TRON" },
  { codigo: "SHIB", nombre: "Shiba Inu" },
  { codigo: "VET", nombre: "VeChain" },
  { codigo: "ATOM", nombre: "Cosmos" },
  { codigo: "MANA", nombre: "Decentraland" },
  { codigo: "SAND", nombre: "The Sandbox" },
  { codigo: "FTM", nombre: "Fantom" },
  { codigo: "AXS", nombre: "Axie Infinity" },
  { codigo: "HBAR", nombre: "Hedera" },
  { codigo: "NEAR", nombre: "NEAR Protocol" },
  { codigo: "GRT", nombre: "The Graph" },
  { codigo: "EGLD", nombre: "MultiversX" },
  { codigo: "EOS", nombre: "EOS" },
  { codigo: "XTZ", nombre: "Tezos" },
  { codigo: "IOTA", nombre: "IOTA" },
  { codigo: "ZEC", nombre: "Zcash" },
  { codigo: "DASH", nombre: "Dash" },
  { codigo: "NEO", nombre: "NEO" },
  { codigo: "KSM", nombre: "Kusama" },
  { codigo: "ONE", nombre: "Harmony" },
  { codigo: "RUNE", nombre: "THORChain" },
  { codigo: "WAVES", nombre: "Waves" },
  { codigo: "LRC", nombre: "Loopring" },
  { codigo: "ENJ", nombre: "Enjin Coin" },
  { codigo: "BAT", nombre: "Basic Attention Token" },
  { codigo: "CHZ", nombre: "Chiliz" },
  { codigo: "CRV", nombre: "Curve DAO Token" },
  { codigo: "GALA", nombre: "Gala" },
  { codigo: "AMP", nombre: "Amp" },
  { codigo: "HNT", nombre: "Helium" } */
];


fromCurrency.innerHTML = ''; 
toCurrency.innerHTML = '';
paises.forEach(pais => {
  const opcion1 = document.createElement("option");
  const opcion2 = document.createElement("option");

  opcion1.value = opcion2.value = pais.codigo;
  opcion1.textContent = opcion2.textContent = `${pais.codigo} - ${pais.nombre}`;

  fromCurrency.appendChild(opcion1);
  toCurrency.appendChild(opcion2);
});


fromCurrency.value = "USD";
toCurrency.value = "COP";


const obtenerConversion = async () => {
  try {
    const cantidadValor = parseFloat(cantidad.value) || 1;
    const fromCurrencyValor = fromCurrency.value;
    const toCurrencyValor = toCurrency.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrencyValor}`);
    if (!response.ok) {
      throw new Error("Error en la respuesta de la API");
    }
    const data = await response.json();

    const tasaCambio = data.rates[toCurrencyValor];
    if (!tasaCambio) {
      throw new Error("Tasa de cambio no disponible");
    }

    const cantidadConvertidaValor = (cantidadValor * tasaCambio).toFixed(2);
    cantidadConvertida.value = cantidadConvertidaValor;
    resultado.textContent = `1 ${fromCurrencyValor} = ${tasaCambio.toFixed(2)} ${toCurrencyValor}`;
  } catch (error) {
    console.error("Error en la conversión:", error);
    resultado.textContent = "Error al obtener la conversión. Intenta de nuevo.";
    cantidadConvertida.value = '';
  }
};

obtenerConversion();

cantidad.addEventListener("input", obtenerConversion);
fromCurrency.addEventListener("change", obtenerConversion);
toCurrency.addEventListener("change", obtenerConversion);