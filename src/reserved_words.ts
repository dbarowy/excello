import { Primitives as P, CharUtil as CU } from "parsecco";
import { AST } from "./ast";
import { Primitives as PP } from "./primitives";

export module ReservedWords {
  interface AritiesMap {
    [key: string]: Set<number>;
  }

  interface ArityMap {
    [key: string]: number;
  }

  export const arityFixed: AritiesMap = {
    ABS: new Set([1]),
    ACCRINT: new Set([6, 7, 8, 9]),
    ACCRINTM: new Set([4, 5]),
    ACOS: new Set([1]),
    ACOSH: new Set([1]),
    ACOT: new Set([1]),
    ACOTH: new Set([1]),
    ADDRESS: new Set([2, 3, 4, 5]),
    AMORDEGRC: new Set([6, 7]),
    AMORLINC: new Set([6, 7]),
    ARABIC: new Set([1]),
    AREAS: new Set([1]),
    ASC: new Set([1]),
    ASIN: new Set([1]),
    ASINH: new Set([1]),
    ATAN: new Set([1]),
    ATAN2: new Set([2]),
    ATANH: new Set([1]),
    AVERAGEIF: new Set([2, 3]),
    BAHTTEXT: new Set([1]),
    BASE: new Set([2, 3]),
    BESSELI: new Set([2]),
    BESSELJ: new Set([2]),
    BESSELK: new Set([2]),
    BESSELY: new Set([2]),
    "BETA.DIST": new Set([4, 5, 6]),
    "BETA.INV": new Set([3, 4, 5]),
    BETADIST: new Set([3, 4, 5]),
    BETAINV: new Set([3, 4, 5]),
    BIN2DEC: new Set([1]),
    BIN2HEX: new Set([1, 2]),
    BIN2OCT: new Set([1, 2]),
    "BINOM.DIST": new Set([4]),
    "BINOM.DIST.RANGE": new Set([3, 4]),
    "BINOM.INV": new Set([3]),
    BINOMDIST: new Set([4]),
    BITAND: new Set([2]),
    BITLSHIFT: new Set([2]),
    BITOR: new Set([2]),
    BITRSHIFT: new Set([2]),
    BITXOR: new Set([2]),
    CEILING: new Set([2]),
    "CEILING.MATH": new Set([3]),
    "CEILING.PRECISE": new Set([1, 2]),
    CELL: new Set([1, 2]),
    CHAR: new Set([1]),
    CHIDIST: new Set([2]),
    CHIINV: new Set([2]),
    "CHISQ.DIST": new Set([3]),
    "CHISQ.DIST.RT": new Set([2]),
    "CHISQ.TEST": new Set([2]),
    CHITEST: new Set([2]),
    CLEAN: new Set([1]),
    CODE: new Set([1]),
    COLUMN: new Set([0, 1]),
    COLUMNS: new Set([1]),
    COMBIN: new Set([2]),
    COMBINA: new Set([2]),
    COMPLEX: new Set([2, 3]),
    CONFIDENCE: new Set([3]),
    "CONFIDENCE.NORM": new Set([3]),
    "CONFIDENCE.T": new Set([3]),
    CONVERT: new Set([3]),
    CORREL: new Set([3]),
    COS: new Set([1]),
    COSH: new Set([1]),
    COT: new Set([1]),
    COTH: new Set([1]),
    COUNTBLANK: new Set([1]),
    COUNTIF: new Set([2]),
    COUPDAYBS: new Set([3, 4]),
    COUPDAYS: new Set([3, 4]),
    COUPDAYSNC: new Set([3, 4]),
    COUPNCD: new Set([3, 4]),
    COUPNUM: new Set([3, 4]),
    COUPPCD: new Set([3, 4]),
    COVAR: new Set([2]),
    "COVARIANCE.P": new Set([2]),
    "COVARIANCE.S": new Set([2]),
    CRITBINOM: new Set([3]),
    CSC: new Set([1]),
    CSCH: new Set([1]),
    CUBEKPIMEMBER: new Set([3]),
    CUBEMEMBER: new Set([2, 3]),
    CUBEMEMBERPROPERTY: new Set([3]),
    CUBERANKEDMEMBER: new Set([2, 3]),
    CUBESET: new Set([2, 3, 4, 5]),
    CUBESETCOUNT: new Set([1]),
    CUMIPMT: new Set([6]),
    CUMPRINC: new Set([6]),
    DATE: new Set([3]),
    DATEDIF: new Set([3]),
    DATEVALUE: new Set([2]),
    DAVERAGE: new Set([3]),
    DAY: new Set([1]),
    DAYS: new Set([2]),
    DAYS360: new Set([2, 3]),
    DB: new Set([4, 5]),
    DBCS: new Set([1]),
    DCOUNT: new Set([3]),
    DCOUNTA: new Set([3]),
    DDB: new Set([4, 5]),
    DEC2BIN: new Set([1, 2]),
    DEC2HEX: new Set([1, 2]),
    DEC2OCT: new Set([1, 2]),
    DECIMAL: new Set([2]),
    DEGREES: new Set([1]),
    DELTA: new Set([1, 2]),
    DGET: new Set([3]),
    DISC: new Set([4, 5]),
    DMAX: new Set([3]),
    DMIN: new Set([3]),
    DOLLAR: new Set([1, 2]),
    DOLLARDE: new Set([2]),
    DOLLARFR: new Set([2]),
    DPRODUCT: new Set([3]),
    DSTDEV: new Set([3]),
    DSTDEVP: new Set([3]),
    DSUM: new Set([3]),
    DURATION: new Set([5, 6]),
    DVAR: new Set([3]),
    DVARP: new Set([3]),
    EDATE: new Set([2]),
    EFFECT: new Set([2]),
    ENCODEURL: new Set([1]),
    EOMONTH: new Set([2]),
    ERF: new Set([1, 2]),
    "ERF.PRECISE": new Set([1]),
    ERFC: new Set([1]),
    "ERFC.PRECISE": new Set([1]),
    "ERROR.TYPE": new Set([1]),
    EUROCONVERT: new Set([5]),
    EVEN: new Set([1]),
    EXACT: new Set([2]),
    EXP: new Set([1]),
    "EXPON.DIST": new Set([3]),
    EXPONDIST: new Set([3]),
    "F.DIST": new Set([2, 4]),
    "F.DIST.RT": new Set([3]),
    "F.INV": new Set([3]),
    "F.INV.RT": new Set([3]),
    "F.TEST": new Set([2]),
    FACT: new Set([1]),
    FACTDOUBLE: new Set([1]),
    FDIST: new Set([3]),
    FILTERXML: new Set([2]),
    FIND: new Set([2, 3]),
    FINDB: new Set([2, 3]),
    FINV: new Set([3]),
    FISHER: new Set([1]),
    FISHERINV: new Set([1]),
    FIXED: new Set([1, 2, 3]),
    FLOOR: new Set([2]),
    "FLOOR.MATH": new Set([3]),
    "FLOOR.PRECISE": new Set([1, 2]),
    FORECAST: new Set([3]),
    "FORECAST.ETS": new Set([3, 4, 5, 6]),
    "FORECAST.ETS.CONFINT": new Set([3, 4, 5, 6, 7]),
    "FORECAST.ETS.SEASONALITY": new Set([2, 3, 4]),
    "FORECAST.ETS.STAT": new Set([3, 4, 5, 6]),
    "FORECAST.LINEAR": new Set([3]),
    FORMULATEXT: new Set([1]),
    FREQUENCY: new Set([2]),
    FTEST: new Set([2]),
    FV: new Set([3, 4, 5]),
    FVSCHEDULE: new Set([2]),
    GAMMA: new Set([1]),
    "GAMMA.DIST": new Set([4]),
    "GAMMA.INV": new Set([3]),
    GAMMADIST: new Set([4]),
    GAMMAINV: new Set([3]),
    GAMMALN: new Set([1]),
    "GAMMALN.PRECISE": new Set([1]),
    GAUSS: new Set([1]),
    GESTEP: new Set([1, 2]),
    GROWTH: new Set([1, 2, 3, 4]),
    HEX2BIN: new Set([1, 2]),
    HEX2DEC: new Set([1]),
    HEX2OCT: new Set([1, 2]),
    HLOOKUP: new Set([3, 4]),
    HOUR: new Set([1]),
    HYPERLINK: new Set([1, 2]),
    "HYPGEOM.DIST": new Set([5]),
    HYPGEOMDIST: new Set([4]),
    IF: new Set([2, 3]),
    IFERROR: new Set([2]),
    IFNA: new Set([2]),
    IMABS: new Set([1]),
    IMAGINARY: new Set([1]),
    IMARGUMENT: new Set([1]),
    IMCONJUGATE: new Set([1]),
    IMCOS: new Set([1]),
    IMCOSH: new Set([1]),
    IMCOT: new Set([1]),
    IMCSC: new Set([1]),
    IMCSCH: new Set([1]),
    IMDIV: new Set([2]),
    IMEXP: new Set([1]),
    IMLN: new Set([1]),
    IMLOG10: new Set([1]),
    IMLOG2: new Set([1]),
    IMPOWER: new Set([2]),
    IMREAL: new Set([1]),
    IMSEC: new Set([1]),
    IMSECH: new Set([1]),
    IMSIN: new Set([1]),
    IMSINH: new Set([1]),
    IMSQRT: new Set([1]),
    IMSUB: new Set([2]),
    IMTAN: new Set([1]),
    INDEX: new Set([1, 2, 3]),
    INFO: new Set([1]),
    INT: new Set([1]),
    INTERCEPT: new Set([2]),
    INTRATE: new Set([4, 5]),
    IPMT: new Set([4, 5, 6]),
    IRR: new Set([1, 2]),
    ISBLANK: new Set([1]),
    ISERR: new Set([1]),
    ISERROR: new Set([1]),
    ISEVEN: new Set([1]),
    ISFORMULA: new Set([1]),
    ISLOGICAL: new Set([1]),
    ISNA: new Set([1]),
    ISNONTEXT: new Set([1]),
    ISNUMBER: new Set([1]),
    "ISO.CEILING": new Set([1, 2]),
    ISODD: new Set([1]),
    ISOWEEKNUM: new Set([1]),
    ISPMT: new Set([4]),
    ISREF: new Set([1]),
    ISTEXT: new Set([1]),
    JIS: new Set([1]),
    LARGE: new Set([2]),
    LEFT: new Set([1, 2]),
    LEFTB: new Set([1, 2]),
    LEN: new Set([1]),
    LENB: new Set([1]),
    LINEST: new Set([1, 2, 3, 4]),
    LN: new Set([1]),
    LOG: new Set([1, 2]),
    LOG10: new Set([1]),
    LOGEST: new Set([1, 2, 3, 4]),
    LOGINV: new Set([3]),
    "LOGNORM.DIST": new Set([4]),
    "LOGNORM.INV": new Set([3]),
    LOGNORMDIST: new Set([3]),
    LOOKUP: new Set([2, 3]),
    LOWER: new Set([1]),
    MATCH: new Set([2, 3]),
    MDETERM: new Set([1, 1, 1]),
    MDURATION: new Set([5, 5, 6, 6]),
    MEDIAN: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    MID: new Set([3]),
    MIDB: new Set([3]),
    MINUTE: new Set([1]),
    MINVERSE: new Set([1]),
    MIRR: new Set([3]),
    MMULT: new Set([2]),
    MOD: new Set([2]),
    MONTH: new Set([1]),
    MROUND: new Set([2]),
    MULTINOMIAL: new Set([3, 7, 8, 9]),
    MUNIT: new Set([1]),
    N: new Set([1]),
    NA: new Set([0]),
    "NEGBINOM.DIST": new Set([4]),
    NEGBINOMDIST: new Set([3]),
    NETWORKDAYS: new Set([2, 3]),
    "NETWORKDAYS.INTL": new Set([2, 3, 4]),
    NOMINAL: new Set([2]),
    "NORM.DIST": new Set([4]),
    "NORM.INV": new Set([3]),
    "NORM.S.DIST": new Set([2]),
    "NORM.S.INV": new Set([1]),
    NORMDIST: new Set([4]),
    NORMINV: new Set([3]),
    NORMSDIST: new Set([1]),
    NORMSINV: new Set([1]),
    NOT: new Set([1]),
    NOW: new Set([0]),
    NPER: new Set([3, 4, 5]),
    NPV: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
    NUMBERVALUE: new Set([1, 2, 3]),
    OCT2BIN: new Set([1, 2]),
    OCT2DEC: new Set([1, 2]),
    OCT2HEX: new Set([1, 2]),
    ODD: new Set([1]),
    ODDFPRICE: new Set([2, 8, 9]),
    ODDFYIELD: new Set([8, 9]),
    ODDLPRICE: new Set([7, 8]),
    ODDLYIELD: new Set([7, 8]),
    OFFSET: new Set([3, 4, 5]),
    OR: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    PDURATION: new Set([3]),
    PEARSON: new Set([2]),
    PERCENTILE: new Set([2]),
    "PERCENTILE.EXC": new Set([2]),
    "PERCENTILE.INC": new Set([2]),
    PERCENTRANK: new Set([2, 3]),
    "PERCENTRANK.EXC": new Set([2, 3]),
    "PERCENTRANK.INC": new Set([2, 3]),
    PERMUT: new Set([2]),
    PERMUTATIONA: new Set([2]),
    PHI: new Set([1]),
    PHONETIC: new Set([1]),
    PI: new Set([0]),
    PMT: new Set([3, 4, 5]),
    POISSON: new Set([3]),
    "POISSON.DIST": new Set([3]),
    POWER: new Set([2]),
    PPMT: new Set([4, 5, 6]),
    PRICE: new Set([6, 7]),
    PRICEDISC: new Set([4, 5]),
    PRICEMAT: new Set([4, 5]),
    PROB: new Set([2, 3, 4]),
    PRODUCT: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    PROPER: new Set([1]),
    PV: new Set([3, 4, 5]),
    QUARTILE: new Set([2]),
    "QUARTILE.EXC": new Set([2]),
    "QUARTILE.INC": new Set([2]),
    QUOTIENT: new Set([2]),
    RADIANS: new Set([1]),
    RAND: new Set([0]),
    RANDBETWEEN: new Set([2]),
    RANK: new Set([2, 3]),
    "RANK.AVG": new Set([2, 3]),
    "RANK.EQ": new Set([2, 3]),
    RATE: new Set([3, 4, 5, 6]),
    RECEIVED: new Set([4, 5]),
    "REGISTER.ID": new Set([2, 3]),
    REPLACE: new Set([4]),
    REPLACEB: new Set([4]),
    REPT: new Set([2]),
    RIGHT: new Set([1, 2]),
    RIGHTB: new Set([1, 2]),
    ROMAN: new Set([1, 2]),
    ROUND: new Set([2]),
    ROUNDDOWN: new Set([2]),
    ROUNDUP: new Set([2]),
    ROW: new Set([0, 1]),
    ROWS: new Set([1]),
    RRI: new Set([3]),
    RSQ: new Set([2]),
    RTD: new Set([3, 4, 5, 6, 7, 8, 9]),
    SEARCH: new Set([2, 3]),
    SEARCHB: new Set([2, 3]),
    SEC: new Set([1]),
    SECH: new Set([1]),
    SECOND: new Set([1]),
    SERIESSUM: new Set([4]),
    SHEET: new Set([0, 1]),
    SHEETS: new Set([0, 1]),
    SIGN: new Set([1]),
    SIN: new Set([1]),
    SINH: new Set([1]),
    SKEW: new Set([1, 2, 3, 4, 5, 6]),
    "SKEW.P": new Set([1, 2, 3, 4, 5, 6]),
    SLN: new Set([3]),
    SLOPE: new Set([2]),
    SMALL: new Set([2]),
    "SQL.REQUEST": new Set([1, 2, 3, 4, 5]),
    SQRT: new Set([1]),
    SQRTPI: new Set([1]),
    STANDARDIZE: new Set([3]),
    STDEV: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    "STDEV.P": new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    "STDEV.S": new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    STDEVA: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    STDEVP: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    STDEVPA: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    STEYX: new Set([2]),
    SUBSTITUTE: new Set([3, 4]),
    SUBTOTAL: new Set([2, 3, 4, 5, 6, 7, 8, 9]),
    SUMIF: new Set([2, 3]),
    SUMIFS: new Set([3, 5, 7]),
    SUMPRODUCT: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    SUMSQ: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    SUMX2MY2: new Set([2]),
    SUMX2PY2: new Set([2]),
    SUMXMY2: new Set([2]),
    SWITCH: new Set([3, 4, 5, 6, 7, 8, 9]),
    SYD: new Set([4]),
    T: new Set([1]),
    "T.DIST": new Set([3]),
    "T.DIST.2T": new Set([3]),
    "T.DIST.RT": new Set([2]),
    "T.INV": new Set([2]),
    "T.INV.2T": new Set([2]),
    "T.TEST": new Set([4]),
    TAN: new Set([1]),
    TANH: new Set([1]),
    TBILLEQ: new Set([3]),
    TBILLPRICE: new Set([3]),
    TBILLYIELD: new Set([2]),
    TDIST: new Set([3]),
    TEXT: new Set([2]),
    TEXTJOIN: new Set([3, 4, 5, 6, 7, 8]),
    TIME: new Set([3]),
    TIMEVALUE: new Set([1]),
    TINV: new Set([2]),
    TODAY: new Set([0]),
    TRANSPOSE: new Set([1]),
    TREND: new Set([1, 2, 3, 4]),
    TRIM: new Set([1]),
    TRIMMEAN: new Set([2]),
    TRUNC: new Set([1, 2]),
    TTEST: new Set([4]),
    TYPE: new Set([1]),
    UNICHAR: new Set([1]),
    UNICODE: new Set([1]),
    UPPER: new Set([1]),
    VALUE: new Set([1]),
    VAR: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    "VAR.P": new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    "VAR.S": new Set([1, 2, 3, 4, 6, 7, 8, 9]),
    VARA: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    VARP: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    VARPA: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    VDB: new Set([5, 6, 7]),
    VLOOKUP: new Set([3, 4]),
    WEBSERVICE: new Set([1]),
    WEEKDAY: new Set([1, 2]),
    WEEKNUM: new Set([1, 2]),
    WEIBULL: new Set([4]),
    "WEIBULL.DIST": new Set([4]),
    WORKDAY: new Set([2, 3]),
    "WORKDAY.INTL": new Set([2, 3, 4]),
    XIRR: new Set([2, 3]),
    XNPV: new Set([3]),
    XOR: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    YEAR: new Set([1]),
    YEARFRAC: new Set([2, 3]),
    YIELD: new Set([6, 7]),
    YIELDDISC: new Set([4, 5]),
    YIELDMAT: new Set([5, 6]),
    "Z.TEST": new Set([2, 3]),
    ZTEST: new Set([2, 3]),
  };

  export const arityAtLeastN: ArityMap = {
    AGGREGATE: 3,
    AND: 1,
    AVEDEV: 1,
    AVERAGE: 1,
    AVERAGEA: 1,
    AVERAGEIFS: 3,
    CALL: 1,
    CHOOSE: 2,
    CONCAT: 1,
    CONCATENATE: 1,
    COUNT: 1,
    COUNTA: 1,
    COUNTIFS: 2,
    CUBEVALUE: 1,
    DEVSQ: 1,
    GCD: 1,
    GEOMEAN: 1,
    GETPIVOTDATA: 2,
    HARMEAN: 1,
    IFS: 2,
    IMPRODUCT: 1,
    IMSUM: 1,
    KURT: 1,
    LCM: 1,
    MAX: 1,
    MAXA: 1,
    MAXIFS: 3,
    MIN: 1,
    MINA: 1,
    MINIFS: 3,
    MODE: 1,
    "MODE.MULT": 1,
    "MODE.SNGL": 1,
    MULTINOMIAL: 1,
  };

  export const arityAny = new Set(["SUM"]);

  export function whichArity(name: string) {
    if (arityFixed.hasOwnProperty(name)) {
      return "fixed";
    } else if (arityAtLeastN.hasOwnProperty(name)) {
      return "atleast";
    } else if (arityAny.has(name)) {
      return "any";
    } else {
      return "unknown";
    }
  }

  const Arity0Names: string[] = [
    "COLUMN",
    "SHEETS",
    "SHEET",
    "TODAY",
    "RAND",
    "NOW",
    "ROW",
    "NA",
    "PI",
  ];

  const Arity1Names: string[] = [
    "CEILING.PRECISE",
    "GAMMALN.PRECISE",
    "FLOOR.PRECISE",
    "CUBESETCOUNT",
    "ERFC.PRECISE",
    "ERF.PRECISE",
    "FORMULATEXT",
    "IMCONJUGATE",
    "ISO.CEILING",
    "NUMBERVALUE",
    "SQL.REQUEST",
    "COUNTBLANK",
    "ERROR.TYPE",
    "FACTDOUBLE",
    "IMARGUMENT",
    "ISOWEEKNUM",
    "NORM.S.INV",
    "SUMPRODUCT",
    "WEBSERVICE",
    "ENCODEURL",
    "FISHERINV",
    "HYPERLINK",
    "IMAGINARY",
    "ISFORMULA",
    "ISLOGICAL",
    "ISNONTEXT",
    "NORMSDIST",
    "TIMEVALUE",
    "TRANSPOSE",
    "BAHTTEXT",
    "ISNUMBER",
    "MINVERSE",
    "NORMSINV",
    "PHONETIC",
    "BIN2DEC",
    "BIN2HEX",
    "BIN2OCT",
    "COLUMNS",
    "DEC2BIN",
    "DEC2HEX",
    "DEC2OCT",
    "DEGREES",
    "GAMMALN",
    "HEX2BIN",
    "HEX2DEC",
    "HEX2OCT",
    "IMLOG10",
    "ISBLANK",
    "ISERROR",
    "MDETERM",
    "MDETERM",
    "MDETERM",
    "OCT2BIN",
    "OCT2DEC",
    "OCT2HEX",
    "PRODUCT",
    "RADIANS",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "UNICHAR",
    "UNICODE",
    "WEEKDAY",
    "WEEKNUM",
    "ARABIC",
    "COLUMN",
    "DOLLAR",
    "FISHER",
    "GESTEP",
    "GROWTH",
    "IMCOSH",
    "IMCSCH",
    "IMLOG2",
    "IMREAL",
    "IMSECH",
    "IMSINH",
    "IMSQRT",
    "ISEVEN",
    "ISTEXT",
    "LINEST",
    "LOGEST",
    "MEDIAN",
    "MINUTE",
    "PROPER",
    "RIGHTB",
    "SECOND",
    "SHEETS",
    "SKEW.P",
    "SQRTPI",
    "STDEVA",
    "STDEVP",
    "ACOSH",
    "ACOTH",
    "AREAS",
    "ASINH",
    "ATANH",
    "CLEAN",
    "DELTA",
    "FIXED",
    "GAMMA",
    "GAUSS",
    "IMABS",
    "IMCOS",
    "IMCOT",
    "IMCSC",
    "IMEXP",
    "IMSEC",
    "IMSIN",
    "IMTAN",
    "INDEX",
    "ISERR",
    "ISODD",
    "ISREF",
    "LEFTB",
    "LOG10",
    "LOWER",
    "MONTH",
    "MUNIT",
    "RIGHT",
    "ROMAN",
    "SHEET",
    "STDEV",
    "SUMSQ",
    "TREND",
    "TRUNC",
    "UPPER",
    "VALUE",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "ACOS",
    "ACOT",
    "ASIN",
    "ATAN",
    "CELL",
    "CHAR",
    "CODE",
    "COSH",
    "COTH",
    "CSCH",
    "DBCS",
    "ERFC",
    "EVEN",
    "FACT",
    "HOUR",
    "IMLN",
    "INFO",
    "ISNA",
    "LEFT",
    "LENB",
    "ROWS",
    "SECH",
    "SIGN",
    "SINH",
    "SKEW",
    "SQRT",
    "TANH",
    "TRIM",
    "TYPE",
    "VARA",
    "VARP",
    "YEAR",
    "ABS",
    "ASC",
    "COS",
    "COT",
    "CSC",
    "DAY",
    "ERF",
    "EXP",
    "INT",
    "IRR",
    "JIS",
    "LEN",
    "LOG",
    "NOT",
    "ODD",
    "PHI",
    "ROW",
    "SEC",
    "SIN",
    "TAN",
    "VAR",
    "XOR",
    "LN",
    "OR",
    "N",
    "T",
  ];

  const Arity2Names: string[] = [
    "FORECAST.ETS.SEASONALITY",
    "CUBERANKEDMEMBER",
    "NETWORKDAYS.INTL",
    "CEILING.PRECISE",
    "PERCENTRANK.EXC",
    "PERCENTRANK.INC",
    "PERCENTILE.EXC",
    "PERCENTILE.INC",
    "CHISQ.DIST.RT",
    "FLOOR.PRECISE",
    "COVARIANCE.P",
    "COVARIANCE.S",
    "PERMUTATIONA",
    "QUARTILE.EXC",
    "QUARTILE.INC",
    "WORKDAY.INTL",
    "ISO.CEILING",
    "NETWORKDAYS",
    "NORM.S.DIST",
    "NUMBERVALUE",
    "PERCENTRANK",
    "RANDBETWEEN",
    "REGISTER.ID",
    "SQL.REQUEST",
    "CHISQ.TEST",
    "CUBEMEMBER",
    "FVSCHEDULE",
    "PERCENTILE",
    "SUMPRODUCT",
    "TBILLYIELD",
    "AVERAGEIF",
    "BITLSHIFT",
    "BITRSHIFT",
    "DATEVALUE",
    "FILTERXML",
    "FREQUENCY",
    "HYPERLINK",
    "INTERCEPT",
    "ODDFPRICE",
    "ROUNDDOWN",
    "T.DIST.RT",
    "DOLLARDE",
    "DOLLARFR",
    "QUARTILE",
    "QUOTIENT",
    "RANK.AVG",
    "SUBTOTAL",
    "SUMX2MY2",
    "SUMX2PY2",
    "T.INV.2T",
    "TRIMMEAN",
    "YEARFRAC",
    "ADDRESS",
    "BESSELI",
    "BESSELJ",
    "BESSELK",
    "BESSELY",
    "BIN2HEX",
    "BIN2OCT",
    "CEILING",
    "CHIDIST",
    "CHITEST",
    "COMBINA",
    "COMPLEX",
    "COUNTIF",
    "CUBESET",
    "DAYS360",
    "DEC2BIN",
    "DEC2HEX",
    "DEC2OCT",
    "DECIMAL",
    "EOMONTH",
    "HEX2BIN",
    "HEX2OCT",
    "IFERROR",
    "IMPOWER",
    "NOMINAL",
    "OCT2BIN",
    "OCT2DEC",
    "OCT2HEX",
    "PEARSON",
    "PRODUCT",
    "RANK.EQ",
    "ROUNDUP",
    "SEARCHB",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "SUMXMY2",
    "WEEKDAY",
    "WEEKNUM",
    "WORKDAY",
    "BITAND",
    "BITXOR",
    "CHIINV",
    "COMBIN",
    "DOLLAR",
    "EFFECT",
    "F.DIST",
    "F.TEST",
    "GESTEP",
    "GROWTH",
    "LINEST",
    "LOGEST",
    "LOOKUP",
    "MEDIAN",
    "MROUND",
    "PERMUT",
    "RIGHTB",
    "SEARCH",
    "SKEW.P",
    "STDEVA",
    "STDEVP",
    "Z.TEST",
    "ATAN2",
    "BITOR",
    "COVAR",
    "DELTA",
    "EDATE",
    "EXACT",
    "FINDB",
    "FIXED",
    "FLOOR",
    "FTEST",
    "IMDIV",
    "IMSUB",
    "INDEX",
    "LARGE",
    "LEFTB",
    "MATCH",
    "MMULT",
    "POWER",
    "RIGHT",
    "ROMAN",
    "ROUND",
    "SLOPE",
    "SMALL",
    "STDEV",
    "STEYX",
    "SUMIF",
    "SUMSQ",
    "T.INV",
    "TREND",
    "TRUNC",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "ZTEST",
    "BASE",
    "CELL",
    "DAYS",
    "FIND",
    "IFNA",
    "LEFT",
    "PROB",
    "RANK",
    "REPT",
    "SKEW",
    "TEXT",
    "TINV",
    "VARA",
    "VARP",
    "XIRR",
    "ERF",
    "IRR",
    "LOG",
    "MOD",
    "NPV",
    "RSQ",
    "VAR",
    "XOR",
    "IF",
    "OR",
  ];

  const Arity3Names: string[] = [
    "FORECAST.ETS.SEASONALITY",
    "FORECAST.ETS.CONFINT",
    "CUBEMEMBERPROPERTY",
    "FORECAST.ETS.STAT",
    "BINOM.DIST.RANGE",
    "CUBERANKEDMEMBER",
    "NETWORKDAYS.INTL",
    "CONFIDENCE.NORM",
    "FORECAST.LINEAR",
    "PERCENTRANK.EXC",
    "PERCENTRANK.INC",
    "CUBEKPIMEMBER",
    "CEILING.MATH",
    "CONFIDENCE.T",
    "FORECAST.ETS",
    "NEGBINOMDIST",
    "POISSON.DIST",
    "WORKDAY.INTL",
    "LOGNORM.INV",
    "LOGNORMDIST",
    "MULTINOMIAL",
    "NETWORKDAYS",
    "NUMBERVALUE",
    "PERCENTRANK",
    "REGISTER.ID",
    "SQL.REQUEST",
    "STANDARDIZE",
    "CHISQ.DIST",
    "CONFIDENCE",
    "COUPDAYSNC",
    "CUBEMEMBER",
    "EXPON.DIST",
    "FLOOR.MATH",
    "SUBSTITUTE",
    "SUMPRODUCT",
    "TBILLPRICE",
    "AVERAGEIF",
    "BINOM.INV",
    "COUPDAYBS",
    "CRITBINOM",
    "EXPONDIST",
    "F.DIST.RT",
    "GAMMA.INV",
    "PDURATION",
    "T.DIST.2T",
    "BETA.INV",
    "BETADIST",
    "COUPDAYS",
    "DAVERAGE",
    "DPRODUCT",
    "F.INV.RT",
    "FORECAST",
    "GAMMAINV",
    "NORM.INV",
    "RANK.AVG",
    "SUBTOTAL",
    "TEXTJOIN",
    "YEARFRAC",
    "ADDRESS",
    "BETAINV",
    "COMPLEX",
    "CONVERT",
    "COUPNCD",
    "COUPNUM",
    "COUPPCD",
    "CUBESET",
    "DATEDIF",
    "DAYS360",
    "DCOUNTA",
    "DSTDEVP",
    "HLOOKUP",
    "NORMINV",
    "POISSON",
    "PRODUCT",
    "RANK.EQ",
    "SEARCHB",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "TBILLEQ",
    "VLOOKUP",
    "WORKDAY",
    "CORREL",
    "DCOUNT",
    "DSTDEV",
    "GROWTH",
    "LINEST",
    "LOGEST",
    "LOGINV",
    "LOOKUP",
    "MEDIAN",
    "OFFSET",
    "SEARCH",
    "SKEW.P",
    "STDEVA",
    "STDEVP",
    "SUMIFS",
    "SWITCH",
    "T.DIST",
    "Z.TEST",
    "DVARP",
    "F.INV",
    "FDIST",
    "FINDB",
    "FIXED",
    "INDEX",
    "MATCH",
    "STDEV",
    "SUMIF",
    "SUMSQ",
    "TDIST",
    "TREND",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "ZTEST",
    "BASE",
    "DATE",
    "DGET",
    "DMAX",
    "DMIN",
    "DSUM",
    "DVAR",
    "FIND",
    "FINV",
    "MIDB",
    "MIRR",
    "NPER",
    "PROB",
    "RANK",
    "RATE",
    "SKEW",
    "TIME",
    "VARA",
    "VARP",
    "XIRR",
    "XNPV",
    "MID",
    "NPV",
    "PMT",
    "RRI",
    "RTD",
    "SLN",
    "VAR",
    "XOR",
    "FV",
    "IF",
    "OR",
    "PV",
  ];

  const Arity4Names: string[] = [
    "FORECAST.ETS.SEASONALITY",
    "FORECAST.ETS.CONFINT",
    "FORECAST.ETS.STAT",
    "BINOM.DIST.RANGE",
    "NETWORKDAYS.INTL",
    "NEGBINOM.DIST",
    "FORECAST.ETS",
    "LOGNORM.DIST",
    "WEIBULL.DIST",
    "WORKDAY.INTL",
    "HYPGEOMDIST",
    "SQL.REQUEST",
    "BINOM.DIST",
    "COUPDAYSNC",
    "GAMMA.DIST",
    "SUBSTITUTE",
    "SUMPRODUCT",
    "BETA.DIST",
    "BINOMDIST",
    "COUPDAYBS",
    "GAMMADIST",
    "NORM.DIST",
    "PRICEDISC",
    "SERIESSUM",
    "YIELDDISC",
    "ACCRINTM",
    "BETA.INV",
    "BETADIST",
    "COUPDAYS",
    "NORMDIST",
    "PRICEMAT",
    "RECEIVED",
    "REPLACEB",
    "SUBTOTAL",
    "TEXTJOIN",
    "ADDRESS",
    "BETAINV",
    "COUPNCD",
    "COUPNUM",
    "COUPPCD",
    "CUBESET",
    "HLOOKUP",
    "INTRATE",
    "PRODUCT",
    "REPLACE",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "VLOOKUP",
    "WEIBULL",
    "F.DIST",
    "GROWTH",
    "LINEST",
    "LOGEST",
    "MEDIAN",
    "OFFSET",
    "SKEW.P",
    "STDEVA",
    "STDEVP",
    "SWITCH",
    "T.TEST",
    "ISPMT",
    "STDEV",
    "SUMSQ",
    "TREND",
    "TTEST",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "DISC",
    "IPMT",
    "NPER",
    "PPMT",
    "PROB",
    "RATE",
    "SKEW",
    "VARA",
    "VARP",
    "DDB",
    "NPV",
    "PMT",
    "RTD",
    "SYD",
    "VAR",
    "XOR",
    "DB",
    "FV",
    "OR",
    "PV",
  ];

  const Arity5Names = [
    "FORECAST.ETS.CONFINT",
    "FORECAST.ETS.STAT",
    "FORECAST.ETS",
    "HYPGEOM.DIST",
    "EUROCONVERT",
    "SQL.REQUEST",
    "SUMPRODUCT",
    "BETA.DIST",
    "MDURATION",
    "MDURATION",
    "PRICEDISC",
    "YIELDDISC",
    "ACCRINTM",
    "BETA.INV",
    "BETADIST",
    "DURATION",
    "PRICEMAT",
    "RECEIVED",
    "SUBTOTAL",
    "TEXTJOIN",
    "YIELDMAT",
    "ADDRESS",
    "BETAINV",
    "CUBESET",
    "INTRATE",
    "PRODUCT",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "MEDIAN",
    "OFFSET",
    "SKEW.P",
    "STDEVA",
    "STDEVP",
    "SUMIFS",
    "SWITCH",
    "STDEV",
    "SUMSQ",
    "VAR.P",
    "VARPA",
    "DISC",
    "IPMT",
    "NPER",
    "PPMT",
    "RATE",
    "SKEW",
    "VARA",
    "VARP",
    "DDB",
    "NPV",
    "PMT",
    "RTD",
    "VAR",
    "VDB",
    "XOR",
    "DB",
    "FV",
    "OR",
    "PV",
  ];

  const Arity6Names: string[] = [
    "FORECAST.ETS.CONFINT",
    "FORECAST.ETS.STAT",
    "FORECAST.ETS",
    "SUMPRODUCT",
    "AMORDEGRC",
    "BETA.DIST",
    "MDURATION",
    "MDURATION",
    "AMORLINC",
    "CUMPRINC",
    "DURATION",
    "SUBTOTAL",
    "TEXTJOIN",
    "YIELDMAT",
    "ACCRINT",
    "CUMIPMT",
    "PRODUCT",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "MEDIAN",
    "SKEW.P",
    "STDEVA",
    "STDEVP",
    "SWITCH",
    "PRICE",
    "STDEV",
    "SUMSQ",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "YIELD",
    "IPMT",
    "PPMT",
    "RATE",
    "SKEW",
    "VARA",
    "VARP",
    "NPV",
    "RTD",
    "VAR",
    "VDB",
    "XOR",
    "OR",
  ];

  const Arity7Names: string[] = [
    "FORECAST.ETS.CONFINT",
    "MULTINOMIAL",
    "SUMPRODUCT",
    "AMORDEGRC",
    "ODDLPRICE",
    "ODDLYIELD",
    "AMORLINC",
    "SUBTOTAL",
    "TEXTJOIN",
    "ACCRINT",
    "PRODUCT",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "MEDIAN",
    "STDEVA",
    "STDEVP",
    "SUMIFS",
    "SWITCH",
    "PRICE",
    "STDEV",
    "SUMSQ",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "YIELD",
    "VARA",
    "VARP",
    "NPV",
    "RTD",
    "VAR",
    "VDB",
    "XOR",
    "OR",
  ];

  const Arity8Names: string[] = [
    "MULTINOMIAL",
    "SUMPRODUCT",
    "ODDFPRICE",
    "ODDFYIELD",
    "ODDLPRICE",
    "ODDLYIELD",
    "SUBTOTAL",
    "TEXTJOIN",
    "ACCRINT",
    "PRODUCT",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "MEDIAN",
    "STDEVA",
    "STDEVP",
    "SWITCH",
    "STDEV",
    "SUMSQ",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "VARA",
    "VARP",
    "NPV",
    "RTD",
    "VAR",
    "XOR",
    "OR",
  ];

  const Arity9Names: string[] = [
    "MULTINOMIAL",
    "SUMPRODUCT",
    "ODDFPRICE",
    "ODDFYIELD",
    "SUBTOTAL",
    "ACCRINT",
    "PRODUCT",
    "STDEV.P",
    "STDEV.S",
    "STDEVPA",
    "MEDIAN",
    "STDEVA",
    "STDEVP",
    "SWITCH",
    "STDEV",
    "SUMSQ",
    "VAR.P",
    "VAR.S",
    "VARPA",
    "VARA",
    "VARP",
    "NPV",
    "RTD",
    "VAR",
    "XOR",
    "OR",
  ];

  const ArityAtLeast1Names: string[] = [
    "CONCATENATE",
    "MULTINOMIAL",
    "CUBEVALUE",
    "IMPRODUCT",
    "MODE.MULT",
    "MODE.SNGL",
    "AVERAGEA",
    "AVERAGE",
    "GEOMEAN",
    "HARMEAN",
    "AVEDEV",
    "CONCAT",
    "COUNTA",
    "COUNT",
    "DEVSQ",
    "IMSUM",
    "CALL",
    "KURT",
    "MAXA",
    "MINA",
    "MODE",
    "AND",
    "GCD",
    "LCM",
    "MAX",
    "MIN",
  ];

  const ArityAtLeast2Names: string[] = [
    "GETPIVOTDATA",
    "COUNTIFS",
    "CHOOSE",
    "IFS",
  ];

  const ArityAtLeast3Names: string[] = [
    "AVERAGEIFS",
    "AGGREGATE",
    "MAXIFS",
    "MINIFS",
  ];

  const VarArgsNames: string[] = ["SUM"];

  /**
   * Parses function names that take no arguments.
   */
  export const arity0FunctionName = P.strSat(Arity0Names);

  /**
   * Parses function names that take one arguments.
   */
  export const arity1FunctionName = P.strSat(Arity1Names);

  /**
   * Parses function names that take two arguments.
   */
  export const arity2FunctionName = P.strSat(Arity2Names);

  /**
   * Parses function names that take three arguments.
   */
  export const arity3FunctionName = P.strSat(Arity3Names);

  /**
   * Parses function names that take four arguments.
   */
  export const arity4FunctionName = P.strSat(Arity4Names);

  /**
   * Parses function names that take five arguments.
   */
  export const arity5FunctionName = P.strSat(Arity5Names);

  /**
   * Parses function names that take six arguments.
   */
  export const arity6FunctionName = P.strSat(Arity6Names);

  /**
   * Parses function names that take seven arguments.
   */
  export const arity7FunctionName = P.strSat(Arity7Names);

  /**
   * Parses function names that take eight arguments.
   */
  export const arity8FunctionName = P.strSat(Arity8Names);

  /**
   * Parses function names that take nine arguments.
   */
  export const arity9FunctionName = P.strSat(Arity9Names);

  /**
   * Parses function names that take at least one argument.
   */
  export const arityAtLeast1FunctionName = P.strSat(ArityAtLeast1Names);

  /**
   * Parses function names that take at least two arguments.
   */
  export const arityAtLeast2FunctionName = P.strSat(ArityAtLeast2Names);

  /**
   * Parses function names that take at least three arguments.
   */
  export const arityAtLeast3FunctionName = P.strSat(ArityAtLeast3Names);

  /**
   * Parses function names that take any number of arguments.
   */
  export const varArgsFunctionName = P.strSat(VarArgsNames);

  /**
   * Fails if any reserved word is encountered, succeeds otherwise.
   * Never consumes input.
   */
  export const reservedWord: P.IParser<undefined> = P.fail(
    // the poison pill generic type parameter
    // is purely so that this parser returns
    // a type that is a "reference".
    P.pipe<CU.CharStream, AST.PoisonPill>(
      P.choices(
        arity0FunctionName,
        arity1FunctionName,
        arity2FunctionName,
        arity3FunctionName,
        arity4FunctionName,
        arity5FunctionName,
        arity6FunctionName,
        arity7FunctionName,
        arity8FunctionName,
        arity9FunctionName,
        arityAtLeast1FunctionName,
        arityAtLeast2FunctionName,
        arityAtLeast3FunctionName,
        varArgsFunctionName
      )
    )((cs) => new AST.PoisonPill(PP.EnvStub))
  )("Cannot parse a reserved word.") as P.IParser<undefined>;

  /**
   * An array of all fixed-arity function parsers, indexed by arity.
   */
  export const arityNNameArray: P.IParser<CU.CharStream>[] = [
    arity0FunctionName,
    arity1FunctionName,
    arity2FunctionName,
    arity3FunctionName,
    arity4FunctionName,
    arity5FunctionName,
    arity6FunctionName,
    arity7FunctionName,
    arity8FunctionName,
    arity9FunctionName,
  ];

  /**
   * An array of all "at least"-arity function parsers, indexed by minimum arity.
   */
  export const arityAtLeastNNameArray: P.IParser<CU.CharStream>[] = [
    // NOTE: "ArityAtLeast0" is just VarArgs
    arityAtLeast1FunctionName,
    arityAtLeast2FunctionName,
    arityAtLeast3FunctionName,
  ];

  /**
   * Returns a function name parser for all functions of fixed arity n.
   * @param n Arity.
   */
  export function arityNName(n: number): P.IParser<CU.CharStream> {
    return arityNNameArray[n];
  }

  /**
   * Returns a function name parser for all functions of at least arity n.
   * @param n Arity.
   */
  export function arityAtLeastNName(n: number): P.IParser<CU.CharStream> {
    return arityAtLeastNNameArray[n - 1];
  }
}
