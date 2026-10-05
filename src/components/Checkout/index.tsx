import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Botao from '../Botao'

import * as S from '../Carrinho/styles'

import { usePurchaseMutation } from '../../services/api'

import { formataPreco, getPrecoTotal } from '../../utils'
import { limpar } from '../../store/reducers/carrinho'

const Checkout = () => {
  const [pagamento, setPagamento] = useState(false)
  const { checkout } = useSelector((state: RootReducer) => state.carrinho)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { pratos } = useSelector((state: RootReducer) => state.carrinho)
  const dispatch = useDispatch()
  const precoTotal = getPrecoTotal(pratos)

  const requiredWhenPaying = <T extends Yup.AnySchema>(schema: T) =>
    schema.when([], (_values: unknown[], currentSchema: T) =>
      pagamento
        ? currentSchema.required('O campo é obrigatório')
        : currentSchema
    )

  const validationSchema = Yup.object().shape({
    delivery: Yup.object().shape({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.object().shape({
        description: requiredWhenPaying(Yup.string()),
        city: requiredWhenPaying(Yup.string()),
        zipCode: requiredWhenPaying(Yup.string()),
        number: requiredWhenPaying(Yup.number()),
        complement: requiredWhenPaying(Yup.string())
      }),
      payment: Yup.object().shape({
        card: Yup.object().shape({
          name: requiredWhenPaying(Yup.string()),
          number: requiredWhenPaying(Yup.string()),
          code: requiredWhenPaying(Yup.number()),
          expires: Yup.object().shape({
            month: requiredWhenPaying(Yup.number()),
            year: requiredWhenPaying(Yup.number())
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

  useEffect(() => {
    if (isSuccess) {
      dispatch(limpar())
    }
  }, [isSuccess, dispatch])

  return (
    <S.CheckoutSideContainer className={checkout ? 'proceed' : ''}>
      <S.Sidebar>
        <h3>Entrega</h3>
        <S.InputRow>
          <label htmlFor="nome">Quem irá receber</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={form.values.delivery.receiver}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputRow>
        <S.InputRow>
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={form.values.delivery.address.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputRow>
        <S.InputRow>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            name="cidade"
            id="cidade"
            value={form.values.delivery.address.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputRow>
        <S.InputRow>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            name="cep"
            id="cep"
            value={form.values.delivery.address.zipCode}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            name="numero"
            id="numero"
            value={form.values.delivery.address.number}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputRow>
        <S.InputRow>
          <label htmlFor="complemento">Complemento(Opcional)</label>
          <input
            type="text"
            name="complemento"
            id="complemento"
            value={form.values.delivery.address.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
        </S.InputRow>
        <Botao tipo={'botao'}>Continuar com o pagamento</Botao>
        <Botao tipo={'botao'}>Voltar para o carrinho</Botao>
      </S.Sidebar>
      <S.Sidebar>
        <h3>Pagamento - valor a pagar {formataPreco(precoTotal)}</h3>
        <S.InputRow>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input type="text" name="nomeCartao" id="nomeCartao" />
        </S.InputRow>
        <S.InputRow>
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input type="text" name="numeroCartao" id="numeroCartao" />
          <label htmlFor="cvv">CVV</label>
          <input type="text" name="cvv" id="cvv" />
        </S.InputRow>
        <S.InputRow>
          <label htmlFor="mesVencimento">Mês de vencimento</label>
          <input type="text" id="mesVencimento" name="mesVencimento" />
          <label htmlFor="anoVencimento">Ano de vencimento</label>
          <input type="text" name="anoVencimento" id="anoVencimento" />
        </S.InputRow>
        <Botao tipo="botao">Finalizar pagamento</Botao>
        <Botao tipo="botao">Voltar para a edição de endereço</Botao>
      </S.Sidebar>
      <S.Sidebar>
        <h3>Pedido realizado - {data!.orderId}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.{' '}
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </S.Sidebar>
    </S.CheckoutSideContainer>
  )
}

export default Checkout
