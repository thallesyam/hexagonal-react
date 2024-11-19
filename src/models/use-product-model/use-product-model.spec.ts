import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useProductModel } from '.'
import { BuilderProduct } from '@/test/builders/product-builder'
import { act } from 'react'
import { ListProductServiceErrorMock, ListProductServiceMock } from '@/services/list-product/list-product-service-mock'
import { IHttpClient } from '@/infra/http/http-contracts'

describe('useStoreModel', () => {
    let httpClient: IHttpClient
    let listProductServiceMock: ListProductServiceMock

  beforeEach(() => {
    listProductServiceMock = new ListProductServiceMock(httpClient)
  })
  
  it('should list correct stores', async () => {
    listProductServiceMock.products = [
      new BuilderProduct().build(),
      new BuilderProduct().build(),
      new BuilderProduct().build(),
    ]
    const { result } = renderHook(() => useProductModel({ listProductService: listProductServiceMock }))

    await waitFor(() => {
      act(() => result.current.products.length !== 0)
    })

    expect(result.current.products).toHaveLength(3)
  })

  it('should list emptya products', async () => {
    listProductServiceMock.products = []
    const { result } = renderHook(() => useProductModel({ listProductService: listProductServiceMock }))

    await waitFor(() => {
      act(() => result.current.products.length !== 0)
    })

    expect(result.current.products).toHaveLength(0)
  })

  it('should list empty products when service throw error', async () => {
    listProductServiceMock = new ListProductServiceErrorMock()
    const { result } = renderHook(() => useProductModel({ listProductService: listProductServiceMock }))

    await waitFor(() => {
      act(() => result.current.products.length !== 0)
    })

    expect(result.current.products).toHaveLength(0)
  })
})