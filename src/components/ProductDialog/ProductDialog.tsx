import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatPrice';
import './ProductDialog.scss';

const MAX_QUANTITY = 99;

interface ProductDialogProps {
  product: Product;
  onClose: () => void;
  onSelectQuantity: (product: Product, quantity: number) => void;
}

export function ProductDialog({
  product,
  onClose,
  onSelectQuantity,
}: ProductDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    if (!dialog.open) dialog.showModal();
    titleRef.current?.focus();

    return () => {
      // O DOM remove o dialog ao desmontar. Evita disparar "close"
      // durante a execução duplicada dos efeitos no StrictMode.
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, []);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    const dialog = event.currentTarget;
    if (event.target !== dialog) return;

    const { top, right, bottom, left } = dialog.getBoundingClientRect();
    const clickedOutside =
      event.clientX < left ||
      event.clientX > right ||
      event.clientY < top ||
      event.clientY > bottom;

    if (clickedOutside) dialog.close();
  }

  function handleSelection() {
    onSelectQuantity(product, quantity);
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="product-dialog"
      aria-labelledby="product-dialog-title"
      aria-describedby="product-dialog-description"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <button
        className="product-dialog__close"
        type="button"
        aria-label="Fechar detalhes do produto"
        onClick={() => dialogRef.current?.close()}
      >
        <span aria-hidden="true">×</span>
      </button>

      <div className="product-dialog__visual">
        <img
          src={product.photo}
          alt={product.productName}
          width="260"
          height="230"
          decoding="async"
        />
      </div>

      <div className="product-dialog__content">
        <div className="product-dialog__summary">
          <h2 id="product-dialog-title" ref={titleRef} tabIndex={-1}>
            {product.productName}
          </h2>
          <p className="product-dialog__price">{formatPrice(product.price)}</p>
        </div>

        <div className="product-dialog__description">
          <p id="product-dialog-description">{product.descriptionShort}</p>
          <button
            type="button"
            className="product-dialog__details-toggle"
            aria-expanded={showDetails}
            aria-controls="product-dialog-extra"
            onClick={() => setShowDetails((visible) => !visible)}
          >
            {showDetails ? 'Ocultar detalhes do produto' : 'Veja mais detalhes do produto'}
            <span aria-hidden="true">{showDetails ? ' ‹' : ' ›'}</span>
          </button>

          <p
            id="product-dialog-extra"
            className="product-dialog__extra"
            hidden={!showDetails}
          >
            Valor para {quantity} {quantity === 1 ? 'unidade' : 'unidades'}:{' '}
            <strong>{formatPrice(product.price * quantity)}</strong>
          </p>
        </div>

        <div className="product-dialog__actions">
          <div className="product-dialog__quantity" role="group" aria-label="Quantidade">
            <button
              type="button"
              aria-label="Diminuir quantidade"
              disabled={quantity === 1}
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            >
              <span aria-hidden="true">−</span>
            </button>
            <output aria-label={`Quantidade: ${quantity}`}>
              {String(quantity).padStart(2, '0')}
            </output>
            <button
              type="button"
              aria-label="Aumentar quantidade"
              disabled={quantity === MAX_QUANTITY}
              onClick={() => setQuantity((value) => Math.min(MAX_QUANTITY, value + 1))}
            >
              <span aria-hidden="true">+</span>
            </button>
          </div>

          <button className="product-dialog__buy" type="button" onClick={handleSelection}>
            Comprar
          </button>
        </div>
      </div>
    </dialog>
  );
}
