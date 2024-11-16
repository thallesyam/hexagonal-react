import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useProductModel } from '.'
import { BuilderProduct } from '@/test/builders/product-builder'
import { act } from 'react'
import { ListProductServiceMock } from '@/services/list-product/list-product-service-mock'

describe('useStoreModel', () => {
    let listProductServiceMock: ListProductServiceMock

  beforeEach(() => {
    listProductServiceMock = new ListProductServiceMock()
  })
  
  it('should list correct stores', async () => {
    listProductServiceMock.products = [
      new BuilderProduct().build(),
      new BuilderProduct().build(),
      new BuilderProduct().build(),
    ]
    const { result } = renderHook(() => useProductModel({ listProductService: listProductServiceMock }))

    await waitFor(() => {
      return act(() => result.current.products.length !== 0)
    })

    expect(result.current.products).toHaveLength(3)
  })

  it('should list empty products', async () => {
    listProductServiceMock.products = []
    const { result } = renderHook(() => useProductModel({ listProductService: listProductServiceMock }))

    await waitFor(() => {
      return act(() => result.current.products.length !== 0)
    })

    expect(result.current.products).toHaveLength(0)
  })
})