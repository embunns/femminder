const editSaveButton = document.getElementById('edit-save-button');
const logoutButton = document.getElementById('logout-button');
const editIcon = document.getElementById('edit-icon');
const inputs = document.querySelectorAll('form input');
let isEditing = false;

editSaveButton.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    let formIsValid = true;  // Reset validasi setiap kali tombol ditekan

    if (!isEditing) {
        // Masuk ke mode edit
        inputs.forEach(input => input.removeAttribute('disabled'));
        editSaveButton.textContent = 'Save';
        logoutButton.style.display = 'none'; // Sembunyikan tombol Logout
        isEditing = true;
    } else {
        // Validasi: cek apakah ada input yang kosong
        inputs.forEach(function(input) {
            if (input.required && !input.value.trim()) {
                formIsValid = false;
                input.classList.add("is-invalid");  // Tambahkan feedback error
            } else {
                input.classList.remove("is-invalid");  // Hapus feedback jika diisi
            }
        });

        if (!formIsValid) {
            alert("Please fill in all required fields.");
            return;  // Batalkan penyimpanan jika tidak valid
        }

        // Keluar dari mode edit (simpan perubahan)
        inputs.forEach(input => input.setAttribute('disabled', 'disabled'));
        editSaveButton.textContent = 'Edit Data';
        logoutButton.style.display = 'block';  // Tampilkan kembali tombol Logout
        isEditing = false;
    }
});

// Trigger file input saat ikon diklik
function triggerFileInput() {
    document.getElementById('file-input').click();
}

// Tampilkan gambar yang dipilih
document.getElementById('file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('profile-picture').src = e.target.result;
        }
        
        reader.readAsDataURL(file);
    }
});

// Tampilkan/Sembunyikan Password
const togglePassword = document.querySelector('#tooglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    // Ubah tipe input antara 'password' dan 'text'
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Ubah ikon mata
    togglePassword.classList.toggle('bi-eye');
    togglePassword.classList.toggle('bi-eye-slash');
});

    // Modal Control Functions
    function showModal() {
        document.getElementById('modalContainer').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('modalContainer').style.display = 'none';
    }

    function confirmAction() {
        alert('Redirecting to recommended articles...');
        closeModal();
    }
