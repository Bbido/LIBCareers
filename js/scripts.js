// Smooth page transition effect
function smoothNavigate(url) {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = url;
    }, 500); // Adjust time for transition
}

// Add click event to career categories for smooth navigation
document.querySelectorAll('.categories div').forEach(function(category) {
    category.addEventListener('click', function() {
        let url = category.getAttribute('data-url');
        smoothNavigate(url);
    });
});

// Function to display the dashboard when the correct ID is entered
function showDashboard() {
    const enteredId = document.getElementById('studentId').value;
    const validId = '9002215351088'; // Your example ID

    if (enteredId === validId) {
        document.getElementById('dashboardContent').style.display = 'block';
        window.scrollTo(0, 0); // Ensure the page does not scroll down
    } else {
        alert('Invalid ID. Please try again.');
    }
}

// Career Progress Chart (Chart.js)
function loadCareerChart() {
    const ctx = document.getElementById('careerChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Progress %',
                data: [20, 35, 50, 65, 70],
                borderColor: '#00aaff',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Recent Activity Chart (Chart.js)
function loadActivityChart() {
    const ctx2 = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'Classes Attended',
                data: [5, 4, 6, 5, 3],
                backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#4bc0c0']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call these functions when the page loads
window.onload = function() {
    // Only load the charts when the elements are present on the page
    if (document.getElementById('careerChart')) {
        loadCareerChart();
    }
    if (document.getElementById('activityChart')) {
        loadActivityChart();
    }
};
