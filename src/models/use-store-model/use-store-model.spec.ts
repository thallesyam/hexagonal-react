import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useStoreModel } from '.'
import { BuilderStore } from '@/test/builders/store-builder'
import { act } from 'react'
import { ListStoreServiceMock } from '@/services/list-store/list-store-service-mock'

describe('useStoreModel', () => {
    let listStoreServiceMock: ListStoreServiceMock

  beforeEach(() => {
    listStoreServiceMock = new ListStoreServiceMock()
  })
  
  it('should list correct stores', async () => {
    listStoreServiceMock.stores = [
      new BuilderStore().build(),
      new BuilderStore().build(),
      new BuilderStore().build(),
    ]
    const { result } = renderHook(() => useStoreModel({ listStoreService: listStoreServiceMock }))

    await waitFor(() => {
      return act(() => result.current.stores.length !== 0)
    })

    expect(result.current.stores).toHaveLength(3)
  })

  it('should list empty stores', async () => {
    listStoreServiceMock.stores = []
    const { result } = renderHook(() => useStoreModel({ listStoreService: listStoreServiceMock }))

    await waitFor(() => {
      return act(() => result.current.stores.length !== 0)
    })

    expect(result.current.stores).toHaveLength(0)
  })
})