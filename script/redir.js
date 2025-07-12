function redir(path){
    try {
        location.href = path;
    } catch {
        console.error('Erro: ->', e);
        alert('Não foi possível redirecionar');
    }
}
