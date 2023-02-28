export type Produto = {
  nome: string;
  disponivel: boolean;
  preco: number;
  imagem: string;
  precoAssociado?: number;
  uid?: string;
}
