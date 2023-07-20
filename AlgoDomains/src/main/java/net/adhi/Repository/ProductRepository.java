package net.adhi.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.adhi.Model.Products;
@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {

}
