import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useStoreModel } from '.'
import { BuilderStore } from '@/test/builders/store-builder'
import { act } from 'react'
import { ListStoreServiceErrorMock, ListStoreServiceMock } from '@/services/list-store/list-store-service-mock'
import { ListStoreServiceInterface } from '@/services/list-store/list-store-service'

describe('useStoreModel', () => {
    let listStoreServiceMock: ListStoreServiceInterface

  beforeEach(() => {
    vi.clearAllMocks()
    listStoreServiceMock = new ListStoreServiceMock()
  })
  
  it('should list correct stores', async () => {
    vi.spyOn(listStoreServiceMock, 'exec').mockResolvedValue([
      new BuilderStore().build(),
      new BuilderStore().build(),
      new BuilderStore().build(),
    ])

    const { result } = renderHook(() => useStoreModel({ listStoreService: listStoreServiceMock }))

    await waitFor(() => {
      act(() => result.current.stores.length !== 0)
    })

    expect(result.current.stores).toHaveLength(3)
  })

  it('should list empty stores', async () => {
    vi.spyOn(listStoreServiceMock, 'exec').mockResolvedValue([])

    const { result } = renderHook(() => useStoreModel({ listStoreService: listStoreServiceMock }))

    await waitFor(() => {
      act(() => result.current.stores.length !== 0)
    })

    expect(result.current.stores).toHaveLength(0)
  })

  it('should list empty stores when service throw error', async () => {
    listStoreServiceMock = new ListStoreServiceErrorMock()
    const { result } = renderHook(() => useStoreModel({ listStoreService: listStoreServiceMock }))

    await waitFor(() => {
      act(() => result.current.stores.length !== 0)
    })

    expect(result.current.stores).toHaveLength(0)
  })
})