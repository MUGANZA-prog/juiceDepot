import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar'
import axios from 'axios'
import Product from './cards/ProductsCard'
import SideBar from './navbar/sideBar'
import './Home.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [filters, setFilters] = useState({ searchTerm: '', expiringThisMonth: false })

    useEffect(() => {
        axios.get('http://localhost:5000/api/products/displayProduct')
            .then(res => {
                setProducts(res.data)
                setFilteredProducts(res.data) // Initialize filtered list
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        // Apply filters whenever filters or products change
        const { searchTerm, expiringThisMonth } = filters
        const now = new Date()

        const newFiltered = products.filter(product => {
            const matchesSearch = product.productName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

            const productDate = new Date(product.productDate)
            const matchesExpiration = !expiringThisMonth || (
                productDate.getMonth() === now.getMonth() &&
                productDate.getFullYear() === now.getFullYear()
            )

            return matchesSearch && matchesExpiration
        })

        setFilteredProducts(newFiltered)
    }, [filters, products])

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters)
    }

    return (
        <div className="main-layout">
            <Navbar />
            <div className="layout-body">
                <SideBar onFilterChange={handleFilterChange} />
                <div className="products-container">
                    {filteredProducts.map(product => (
                        <Product
                            key={product.Id}
                            productImage={product.productImage}
                            productName={product.productName}
                            productCategory={product.productCategory}
                            productQuantity={product.productQuantity}
                            productPrice={product.productPrice}
                            productDate={product.productDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
