import { IProduct } from '@/models/use-product-model';
import { randUuid, randCompanyName, randAddress, randZipCode, randNumber, randProductName, randFloat, randPastDate } from '@ngneat/falso';

export class BuilderStore {
  storeId
  name
  category
  location
  products
  createdAt
  updatedAt

  constructor(
    storeId?: string,
    name?: string,
    category?: string,
    location?: { address: string, number: string, zipCode: string },
    products?: IProduct[],
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    this.storeId = storeId ?? randUuid();
    this.name = name ?? randCompanyName();
    this.category = category ?? this.getRandomCategory();
    this.location = location ?? {
      address: randAddress().street,
      number: randNumber({ min: 1, max: 9999 }).toString(),
      zipCode: randZipCode(),
    };
    this.products = products ?? Array.from({ length: 3 }, () => ({
      id: randUuid(),
      name: randProductName(),
      price: randFloat({ min: 5, max: 100 }),
      quantity: randNumber({ min: 1, max: 20 }),
      category: this.getRandomCategory(),
      isAvailable: true,
      productId: randUuid(),
      storeId: this.storeId ?? ''
    }));
    this.createdAt = createdAt ?? randPastDate({ years: 1 });
    this.updatedAt = updatedAt ?? randPastDate({ years: 1 });
  }
  
  setStoreId(storeId: string): this {
    this.storeId = storeId;
    return this;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setCategory(category: string): this {
    this.category = category;
    return this;
  }

  setLocation(
    address: string,
    number: string,
    zipCode: string,
  ): this {
    this.location = { address, number, zipCode };
    return this;
  }

  setProducts(
    products: IProduct[]
  ): this {
    this.products = products;
    return this;
  }

  setCreatedAt(createdAt: Date): this {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date): this {
    this.updatedAt = updatedAt;
    return this;
  }

  build(): BuilderStore {
    if (
      !this.storeId ||
      !this.name ||
      !this.category ||
      !this.location ||
      !this.products ||
      !this.createdAt ||
      !this.updatedAt
    ) {
      throw new Error("Missing required fields for IBuilderStore.");
    }

    return new BuilderStore(
      this.storeId,
      this.name,
      this.category,
      this.location,
      this.products,
      this.createdAt,
      this.updatedAt
    );
  }

  private getRandomCategory(): string {
    const categories = ["Food", "Technology", "Clothing", "Books", "Furniture"];
    return categories[Math.floor(Math.random() * categories.length)];
  }
}
