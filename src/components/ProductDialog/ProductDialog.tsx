import { useEffect, useRef } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductDialog.scss';

interface ProductDialogProps {
  product: Product;
  onClose: () => void;
}

/**
 * Prévia funcional dos detalhes do produto.
 * A fidelidade ao popup e os controles de quantidade serão refinados na etapa feature/product-modal.
 */
export function ProductDialog({ product, onClose }: ProductDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      className="product-dialog"
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close();
      }}
      aria-labelledby="product-dialog-title"
    >
      <button
        type="button"
        className="product-dialog__close"
        aria-label="Fechar detalhes do produto"
        onClick={() => dialogRef.current?.close()}
      >
        ×
      </button>
      <img src={product.photo} alt={product.productName} width="260" height="230" />
      <div className="product-dialog__info">
        <h2 id="product-dialog-title">{product.productName}</h2>
        <strong>{formatPrice(product.price)}</strong>
        <p>{product.descriptionShort}</p>
      </div>
    </dialog>
  );
}
