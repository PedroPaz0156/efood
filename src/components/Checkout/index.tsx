import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik, getIn } from 'formik'
import * as Yup from 'yup'

import Botao from '../Botao'

import * as S from '../Checkout/styles'

import { usePurchaseMutation } from '../../services/api'

import { formataPreco, getPrecoTotal } from '../../utils'
import { limpar, fecharCheckout, fechar } from '../../store/reducers/carrinho'

const Checkout = () => {
  const [pagamento, setPagamento] = useState(false)
  const [state, setState] = useState('delivery')
  const { checkout } = useSelector((state: RootReducer) => state.carrinho)
  const [purchase, { data: PurchaseData, isSuccess }] = usePurchaseMutation()
  const { pratos } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()
  const precoTotal = getPrecoTotal(pratos)

  const mensagemObrigatoria = 'O campo é obrigatório'

  const validationSchema = Yup.object().shape({
    delivery: Yup.object().shape({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required(mensagemObrigatoria),
      address: Yup.object().shape({
        description: Yup.string().required(mensagemObrigatoria),
        city: Yup.string().required(mensagemObrigatoria),
        zipCode: Yup.string().required(mensagemObrigatoria),
        number: Yup.number().required(mensagemObrigatoria),
        complement: Yup.string()
      }),
      payment: Yup.object().shape({
        card: Yup.object().shape({
          name:
            state === 'payment'
              ? Yup.string().required(mensagemObrigatoria)
              : Yup.string(),
          number:
            state === 'payment'
              ? Yup.string().required(mensagemObrigatoria)
              : Yup.string(),
          code:
            state === 'payment'
              ? Yup.number().required(mensagemObrigatoria)
              : Yup.number(),
          expires: Yup.object().shape({
            month:
              state === 'payment'
                ? Yup.number().required(mensagemObrigatoria)
                : Yup.number(),
            year:
              state === 'payment'
                ? Yup.number().required(mensagemObrigatoria)
                : Yup.number()
          })
        })
      })
    })
  })

  const form = useFormik({
    initialValues: {
      products: {
        id: 1,
        price: 0
      },
      delivery: {
        receiver: '',
        address: {
          description: '',
          city: '',
          zipCode: '',
          number: 12,
          complement: ''
        },
        payment: {
          card: {
            name: '',
            number: '',
            code: 123,
            expires: {
              month: 12,
              year: 1234
            }
          }
        }
      }
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      purchase({
        delivery: {
          address: {
            city: values.delivery.address.city,
            description: values.delivery.address.description,
            zipCode: values.delivery.address.zipCode,
            number: values.delivery.address.number,
            complement: values.delivery.address.complement
          },
          payment: {
            card: {
              name: values.delivery.payment.card.name,
              number: values.delivery.payment.card.number,
              code: values.delivery.payment.card.code,
              expires: {
                month: values.delivery.payment.card.expires.month,
                year: values.delivery.payment.card.expires.year
              }
            }
          },
          receiver: values.delivery.receiver
        },
        products: pratos.map((prato) => ({
          id: prato.id,
          price: prato.preco
        })) as [{ id: number; price: number }]
      })
    }
  })

  const mostrarErro = (field: string) => {
    const error = getIn(form.errors, field)
    const touched = getIn(form.touched, field)

    return touched && error ? <S.ErrorWarning>{error}</S.ErrorWarning> : null
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(limpar())
      setState('success')
    }
  }, [isSuccess, dispatch])

  return (
    <form onSubmit={form.handleSubmit}>
      <S.CheckoutSideContainer
        className={checkout && state === 'delivery' ? 'delivery' : ''}
      >
        <S.Sidebar>
          <h3>Entrega</h3>
          <S.InputRow>
            <label htmlFor="receiver">Quem irá receber</label>
            <input
              type="text"
              id="receiver"
              name="delivery.receiver"
              value={form.values.delivery.receiver}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {mostrarErro('delivery.receiver')}
          </S.InputRow>
          <S.InputRow>
            <label htmlFor="address">Endereço</label>
            <input
              type="text"
              id="address"
              name="delivery.address.description"
              value={form.values.delivery.address.description}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {mostrarErro('delivery.address.description')}
          </S.InputRow>
          <S.InputRow>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              name="delivery.address.city"
              id="city"
              value={form.values.delivery.address.city}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {mostrarErro('delivery.address.city')}
          </S.InputRow>
          <S.MicroInputRow>
            <div>
              <label htmlFor="zipCode">CEP</label>
              <input
                type="text"
                name="delivery.address.zipCode"
                id="zipCode"
                value={form.values.delivery.address.zipCode}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {mostrarErro('delivery.address.zipCode')}
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                name="delivery.address.number"
                id="number"
                value={form.values.delivery.address.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {mostrarErro('delivery.address.number')}
            </div>
          </S.MicroInputRow>
          <S.InputRow>
            <label htmlFor="complement">Complemento(Opcional)</label>
            <input
              type="text"
              name="delivery.address.complement"
              id="complement"
              value={form.values.delivery.address.complement}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {mostrarErro('delivery.address.complement')}
          </S.InputRow>
          <Botao
            tipo={'botao'}
            onClick={async () => {
              await Promise.all([
                form.setFieldTouched('delivery.receiver', true, false),
                form.setFieldTouched(
                  'delivery.address.description',
                  true,
                  false
                ),
                form.setFieldTouched('delivery.address.city', true, false),
                form.setFieldTouched('delivery.address.zipCode', true, false),
                form.setFieldTouched('delivery.address.number', true, false)
              ])

              const errors = await form.validateForm()

              const hasDeliveryErrors = [
                'delivery.receiver',
                'delivery.address.description',
                'delivery.address.city',
                'delivery.address.zipCode',
                'delivery.address.number'
              ].some((field) =>
                Boolean(
                  field.split('.').reduce((obj: any, key) => obj?.[key], errors)
                )
              )

              if (!hasDeliveryErrors) {
                setState('payment')
              }
            }}
          >
            Continuar com o pagamento
          </Botao>
          <Botao tipo={'botao'} onClick={() => dispatch(fecharCheckout())}>
            Voltar para o carrinho
          </Botao>
        </S.Sidebar>
      </S.CheckoutSideContainer>
      <S.CheckoutSideContainer
        className={checkout && state === 'payment' ? 'payment' : ''}
      >
        <S.Sidebar>
          <h3>Pagamento - valor a pagar {formataPreco(precoTotal)}</h3>
          <S.InputRow>
            <label htmlFor="cardName">Nome no cartão</label>
            <input
              type="text"
              name="delivery.payment.card.name"
              id="cardName"
              value={form.values.delivery.payment.card.name}
              onChange={form.handleChange}
            />
            {mostrarErro('delivery.payment.card.name')}
          </S.InputRow>
          <S.MicroInputRow>
            <div>
              <label htmlFor="cardNumber">Número do cartão</label>
              <input
                type="text"
                name="delivery.payment.card.number"
                id="cardNumber"
                value={form.values.delivery.payment.card.number}
                onChange={form.handleChange}
                style={{ width: '232px' }}
              />
              {mostrarErro('delivery.payment.card.number')}
            </div>
            <div>
              <label htmlFor="code">CVV</label>
              <input
                type="text"
                name="delivery.payment.card.code"
                id="code"
                value={form.values.delivery.payment.card.code}
                onChange={form.handleChange}
                style={{ width: '88px' }}
              />
              {mostrarErro('delivery.payment.card.code')}
            </div>
          </S.MicroInputRow>
          <S.MicroInputRow>
            <div>
              <label htmlFor="monthExpiration">Mês de vencimento</label>
              <input
                type="text"
                id="monthExpiration"
                name="delivery.payment.card.expires.month"
                value={form.values.delivery.payment.card.expires.month}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                style={{ width: '156px' }}
              />
              {mostrarErro('delivery.payment.card.expires.month')}
            </div>
            <div>
              <label htmlFor="yearExpiration">Ano de vencimento</label>
              <input
                type="text"
                name="delivery.payment.card.expires.year"
                id="yearExpiration"
                value={form.values.delivery.payment.card.expires.year}
                onChange={form.handleChange}
                style={{ width: '156px' }}
              />
              {mostrarErro('delivery.payment.card.expires.year')}
            </div>
          </S.MicroInputRow>
          <button type="submit">Finalizar pagamento</button>
          <Botao tipo="botao" onClick={() => setState('delivery')}>
            Voltar para a edição de endereço
          </Botao>
        </S.Sidebar>
      </S.CheckoutSideContainer>
      <S.CheckoutSideContainer
        className={checkout && state === 'success' ? 'success' : ''}
      >
        <S.Sidebar>
          {/* <h3>Pedido realizado - {PurchaseData!.orderId}</h3> */}
          <p>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
          </p>
          <p>
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
          </p>
          <p>
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
          </p>
          <p>
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </p>
          <Botao
            tipo="botao"
            onClick={() => {
              dispatch(fechar())
              setState('delivery')
              dispatch(limpar())
            }}
          >
            Concluir
          </Botao>
        </S.Sidebar>
      </S.CheckoutSideContainer>
    </form>
  )
}

export default Checkout
