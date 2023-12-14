export interface Entity {
  id: number;
  documentType: DocumentType;
  documentNumber: string;
  businessName: string;
  commercialName: string;
  taxPayerType: TaxPayerType;
  address: string;
  phone: string;
  status: boolean;
}

export interface DocumentType {
  id: number;
  code: string;
  name: string;
  description: string;
  status: boolean;
}

export interface TaxPayerType {
  id: number;
  name: string;
  status: boolean;
}

export interface PageResponse {
  totalElements: number;
  totalPages: number;
  size: number;
  content: [];
  number: number;
}

export interface PaginationRequest {
  page: number;
  size: number;
  sort: string[];
}

