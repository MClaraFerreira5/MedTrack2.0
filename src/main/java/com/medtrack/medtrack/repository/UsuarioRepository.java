package com.medtrack.medtrack.repository;

import com.medtrack.medtrack.model.usuario.Usuario;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;



public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Page<Usuario> findAllUsurios(Pageable paginacao);
}
