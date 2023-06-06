

function estação() { // Sim, é possível usar acentuação
   
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}

// Sugestão de melhoria: refaça esse programa para que ele aceite tanto o mês por extenso quanto o número do mês.