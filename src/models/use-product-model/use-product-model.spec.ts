import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useProductModel } from '.'
import { BuilderProduct } from '@/test/builders/product-builder'
import { act } from 'react'
import { ListProductServiceErrorMock, ListProductServiceMock } from '@/services/list-product/list-product-service-mock'
import { ListProductServiceInterface } from '@/services/list-product/list-product-service'

describe('useStoreModel', () => {
    let listProductServiceMock: ListProductServiceInterface

  beforeEach(() => {
    vi.clearAllMocks()
    listProductServiceMock = new ListProductServiceMock()
  })
  
  it('should list correct stores', async () => {
    vi.spyOn(listProductServiceMock, 'exec').mockResolvedValue([
      new BuilderProduct().build(),
      new BuilderProduct().build(),
      new BuilderProduct().build(),
    ])
    const { result } = renderHook(() => useProductModel({ listProductService: listProductServiceMock }))

    await waitFor(() => {
      act(() => result.current.products.length !== 0)
    })

    expect(result.current.products).toHaveLength(3)
  })

  it('should list emptya products', async () => {
    vi.spyOn(listProductServiceMock, 'exec').mockResolvedValue([])
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