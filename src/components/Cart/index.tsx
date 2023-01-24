import * as Dialog from '@radix-ui/react-dialog';
import { CartClose, CartContent, CartProductDetails, CartFinalization, CartProduct, CartProductImage, FinalizationDetails, CartButtonContainer, ContainerQuantity, ButtonsContainer } from "./styles";
import { Minus, Plus, ShoppingCart , X } from "phosphor-react";
import Image from "next/image";
import { useCart } from "../../hooks/useCart";
import Link from 'next/link';



export function Cart(){
  const { cartItems, cartTotal, removeProductFromCart, changeCartItemQuantity } = useCart();
  const cartItemsQuantity = cartItems.length;
  const formattedCartTotal = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal);

  return(
    <Dialog.Root>
       <Dialog.Trigger asChild>
          <CartButtonContainer>
            <ShoppingCart  />
            <span>{cartItemsQuantity}</span>
          </CartButtonContainer>
       </Dialog.Trigger>
       <Dialog.Portal>
          <CartContent>
            <CartClose>
              <X size="24" weight="bold" /> 
            </CartClose>
            <h2>Carrinho de Compras</h2>
            <section>
              { cartItemsQuantity <= 0 && <p className="texto">Parece que seu carrinho está vazio :(</p>}
              {cartItems.map((cartItem) => (
                <CartProduct key={cartItem.id}>
                  <CartProductImage>
                    <Image width={180} height={93} src={cartItem.photo} alt="" />
                  </CartProductImage>
                  <CartProductDetails>
                    <p>{cartItem.name}</p>
                    <strong>{cartItem.price}</strong>
                    <ContainerQuantity>
                      <strong>QTD:</strong>
                      <ButtonsContainer>
                        <button onClick={() => changeCartItemQuantity(cartItem.id, "decrease")} disabled={cartItem.quantity <= 1}><Minus size={14} weight="fill" /></button>
                        <span>{cartItem.quantity}</span>
                        <button onClick={() => changeCartItemQuantity(cartItem.id, "increase")}><Plus size={14} weight="fill" /></button>
                      </ButtonsContainer>
                    </ContainerQuantity>
                    <button onClick={() => removeProductFromCart(cartItem.id)}><X size="20" weight="bold" /> </button>
                  </CartProductDetails>
                </CartProduct>
              ))}
            </section>
            <CartFinalization>
              <FinalizationDetails>
                <div>
                  <span>Quantidade:</span>
                  <p>{cartItemsQuantity} {cartItemsQuantity === 1 ? 'itens' : 'item'}</p>
                </div>
                <div>
                  <span>Valor Total:</span>
                  <p>{formattedCartTotal}</p>
                </div>
              </FinalizationDetails>
              <button disabled={cartItemsQuantity <= 0}>
                <Link href="sucess">Finalizar</Link>
              </button>
            </CartFinalization>
          </CartContent>
       </Dialog.Portal>
    </Dialog.Root>
  )
}