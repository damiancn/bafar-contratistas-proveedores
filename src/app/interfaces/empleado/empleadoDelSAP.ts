export interface ResponseFromSAP {
  result: Result;
}

interface Result {
  LT_SALIDA: LTSALIDA[];
  P_ENT: LTSALIDA[];
  RESPONSE: RESPONSE[];
  WA_SALIDA: WASALIDA;
}

interface WASALIDA {
  PE1: string;
  PE2: string;
  PE3: string;
  PE4: string;
  PE5: string;
  PE6: string;
  PE7: string;
  PE8: string;
  PE9: string;
  PE10: string;
  PETMSJ: string;
  MSJ: string;
}

interface RESPONSE {
  CODIGO: string;
  DESCRIPCION: string;
  TOKEN: string;
}

interface LTSALIDA {
  C1: string;
  C2: string;
  C3: string;
  C4: string;
  C5: string;
  C6: string;
  C7: string;
  C8: string;
  C9: string;
  C10: string;
  C11: string;
  C12: string;
  C13: string;
  C14: string;
  C15: string;
  C16: string;
  C17: string;
  C18: string;
  C19: string;
  C20: string;
  C21: string;
  C22: string;
  C23: string;
  C24: string;
  C25: string;
  C26: string;
  C27: string;
  C28: string;
  C29: string;
  C30: string;
  C31: string;
  C32: string;
  C33: string;
  C34: string;
  C35: string;
  C36: string;
  C37: string;
  C38: string;
  C39: string;
  C40: string;
  C41: string;
  C42: string;
  C43: string;
  C44: string;
  C45: string;
  C46: string;
  C47: string;
  C48: string;
  C49: string;
  C50: string;
  C51: string;
  C52: string;
  C53: string;
  C54: string;
  C55: string;
  C56: string;
  C57: string;
  C58: string;
  C59: string;
  C60: string;
  C61: string;
  C62: string;
  C63: string;
  C64: string;
  C65: string;
  C66: string;
  C67: string;
  C68: string;
  C69: string;
  C70: string;
  C71: string;
  C72: string;
  C73: string;
  C74: string;
  C75: string;
  C76: string;
  C77: string;
  C78: string;
  C79: string;
  C80: string;
  C81: string;
  C82: string;
  C83: string;
  C84: string;
  C85: string;
  C86: string;
  C87: string;
  C88: string;
  C89: string;
  C90: string;
  C91: string;
  C92: string;
  C93: string;
  C94: string;
  C95: string;
  C96: string;
  C97: string;
  C98: string;
  C99: string;
  C100: string;
}