# Computational Fluid Dynamics (CFD)

## Definition & Units

Computational Fluid Dynamics (CFD) is the numerical analysis and simulation of
fluid flow, heat transfer, and associated phenomena in microbial electrochemical
systems. CFD solves the Navier-Stokes equations along with continuity, energy,
and species transport equations using discretization methods. Key variables
include velocity (m/s), pressure (Pa), temperature (K), and concentration
(mol/m³).

The governing equations for incompressible flow:

- **Continuity**: ∇·v = 0
- **Momentum**: ρ(∂v/∂t + v·∇v) = -∇p + μ∇²v + F
- **Energy**: ρCp(∂T/∂t + v·∇T) = k∇²T + Q
- **Species**: ∂C/∂t + v·∇C = D∇²C + R

Where:

- v = velocity vector (m/s)
- ρ = fluid density (kg/m³)
- p = pressure (Pa)
- μ = dynamic viscosity (Pa·s)
- F = body forces (N/m³)
- T = temperature (K)
- k = thermal conductivity (W/m·K)
- C = concentration (mol/m³)
- D = diffusion coefficient (m²/s)
- R = reaction rate (mol/m³·s)

## Typical Ranges

🟢 **Microbial Fuel Cells (MFCs)**:

- Reynolds number: 0.1-100 (laminar flow)
- Flow velocity: 0.001-0.1 m/s
- Mesh elements: 10⁴-10⁵
- Convergence criteria: 10⁻⁴
- Time step: 0.1-1 s

🟡 **Microbial Electrolysis Cells (MECs)**:

- Reynolds number: 10-1000 (transitional)
- Flow velocity: 0.01-0.5 m/s
- Mesh elements: 10⁵-10⁶
- Convergence criteria: 10⁻⁵
- Time step: 0.01-0.1 s
- Gas holdup: 0.1-0.4

🟣 **Microbial Desalination Cells (MDCs)**:

- Reynolds number: 1-500
- Flow velocity: 0.001-0.2 m/s
- Mesh elements: 10⁵-5×10⁶
- Convergence criteria: 10⁻⁶
- Multiple compartments: 3-5
- Ion transport coupling required

🔴 **Microbial Electrosynthesis Systems**:

- Reynolds number: 100-5000
- Flow velocity: 0.1-2 m/s
- Mesh elements: 10⁶-10⁷
- Convergence criteria: 10⁻⁷
- Time step: 10⁻³-0.01 s
- Multiphase flow modeling essential

## Mathematical Formulations and Theoretical Basis

### Discretization Methods

#### Finite Volume Method (FVM)

```python
def finite_volume_discretization(mesh, flow_field, dt):
    """Finite volume discretization of Navier-Stokes equations"""

    # Initialize variables
    u_new = np.copy(flow_field['u'])
    v_new = np.copy(flow_field['v'])
    p_new = np.copy(flow_field['p'])

    # SIMPLE algorithm for pressure-velocity coupling
    for iteration in range(max_iterations):
        # Momentum predictor
        u_star = u_new + dt * (-convective_term(u_new, v_new) +
                               diffusive_term(u_new) -
                               pressure_gradient(p_new))

        # Pressure correction
        p_prime = solve_pressure_poisson(u_star, v_star)

        # Velocity correction
        u_new = u_star - dt * gradient(p_prime)

        # Update pressure
        p_new = p_new + relax_factor * p_prime

        # Check convergence
        if check_convergence(u_new, u_old, tolerance):
            break

    return u_new, v_new, p_new
```

#### Turbulence Modeling (k-ε Model)

```python
def k_epsilon_turbulence(velocity_field, k, epsilon, dt):
    """Standard k-ε turbulence model implementation"""

    # Model constants
    C_mu = 0.09
    C_1e = 1.44
    C_2e = 1.92
    sigma_k = 1.0
    sigma_e = 1.3

    # Turbulent viscosity
    nu_t = C_mu * k**2 / epsilon

    # Production term
    P_k = nu_t * strain_rate_tensor(velocity_field)**2

    # Transport equations
    dk_dt = transport_equation(k, velocity_field, nu + nu_t/sigma_k) + P_k - epsilon
    de_dt = transport_equation(epsilon, velocity_field, nu + nu_t/sigma_e) + \
            C_1e * epsilon/k * P_k - C_2e * epsilon**2/k

    # Update
    k_new = k + dt * dk_dt
    epsilon_new = epsilon + dt * de_dt

    return k_new, epsilon_new, nu_t
```

### Multiphase Flow Modeling

#### Volume of Fluid (VOF) Method

```python
def vof_multiphase(alpha, velocity, dt):
    """Volume of Fluid method for gas-liquid interface tracking"""

    # Interface reconstruction
    interface_normal = calculate_interface_normal(alpha)

    # Advection equation
    dalpha_dt = -divergence(alpha * velocity)

    # Interface compression
    compression_velocity = calculate_compression_velocity(alpha, interface_normal)
    dalpha_dt += divergence(alpha * (1 - alpha) * compression_velocity)

    # Update volume fraction
    alpha_new = alpha + dt * dalpha_dt

    # Bound volume fraction
    alpha_new = np.clip(alpha_new, 0, 1)

    # Update mixture properties
    rho = alpha_new * rho_gas + (1 - alpha_new) * rho_liquid
    mu = alpha_new * mu_gas + (1 - alpha_new) * mu_liquid

    return alpha_new, rho, mu
```

## Numerical Methods and Algorithms

### Mesh Generation

```python
class MESMeshGenerator:
    """Specialized mesh generator for MES geometries"""

    def __init__(self, geometry, mesh_params):
        self.geometry = geometry
        self.params = mesh_params

    def generate_structured_mesh(self):
        """Generate structured hexahedral mesh"""

        # Define grid spacing
        dx = self.geometry['length'] / self.params['nx']
        dy = self.geometry['width'] / self.params['ny']
        dz = self.geometry['height'] / self.params['nz']

        # Generate nodes
        x = np.linspace(0, self.geometry['length'], self.params['nx'])
        y = np.linspace(0, self.geometry['width'], self.params['ny'])
        z = np.linspace(0, self.geometry['height'], self.params['nz'])

        # Create mesh
        mesh = np.meshgrid(x, y, z, indexing='ij')

        # Apply boundary layer refinement
        mesh = self.refine_boundary_layer(mesh)

        # Quality checks
        self.check_mesh_quality(mesh)

        return mesh

    def generate_unstructured_mesh(self):
        """Generate unstructured tetrahedral mesh using Delaunay"""

        import meshpy.tet as tet

        # Define mesh density function
        def mesh_density(point):
            # Higher density near electrodes
            distance_to_electrode = self.distance_to_nearest_electrode(point)
            return self.params['base_size'] * np.exp(-distance_to_electrode /
                                                    self.params['refinement_length'])

        # Generate mesh
        mesh_info = tet.MeshInfo()
        mesh_info.set_points(self.geometry['vertices'])
        mesh_info.set_facets(self.geometry['faces'])

        mesh = tet.build(mesh_info, max_volume=mesh_density)

        return mesh
```

### Solver Implementation

```python
class CFDSolver:
    """CFD solver for MES applications"""

    def __init__(self, mesh, physics_params, solver_params):
        self.mesh = mesh
        self.physics = physics_params
        self.params = solver_params

    def solve_steady_state(self):
        """Solve steady-state flow problem"""

        # Initialize field variables
        u = np.zeros_like(self.mesh.x)
        v = np.zeros_like(self.mesh.y)
        w = np.zeros_like(self.mesh.z)
        p = np.ones_like(self.mesh.x) * self.physics['p_ref']

        # SIMPLE algorithm
        for iteration in range(self.params['max_iterations']):
            # Store old values
            u_old = np.copy(u)

            # Solve momentum equations
            u_star, v_star, w_star = self.solve_momentum(u, v, w, p)

            # Solve pressure correction
            p_prime = self.solve_pressure_correction(u_star, v_star, w_star)

            # Correct velocity and pressure
            u, v, w = self.correct_velocity(u_star, v_star, w_star, p_prime)
            p = p + self.params['pressure_relax'] * p_prime

            # Check convergence
            residual = np.max(np.abs(u - u_old))
            if residual < self.params['tolerance']:
                print(f"Converged in {iteration} iterations")
                break

        return u, v, w, p

    def solve_transient(self, t_start, t_end, dt):
        """Solve time-dependent flow problem"""

        # Initialize
        solution_history = []
        t = t_start

        # Time integration loop
        while t < t_end:
            # Adaptive time stepping
            dt = self.calculate_time_step(dt)

            # Solve for current time step
            solution = self.solve_time_step(dt)

            # Store solution
            solution_history.append({
                'time': t,
                'solution': solution
            })

            # Update time
            t += dt

        return solution_history
```

## System-Specific Computational Requirements

### 🟢 MFC CFD Requirements

```python
mfc_cfd_config = {
    'mesh': {
        'type': 'structured',
        'elements': 50000,
        'boundary_layers': 5,
        'growth_ratio': 1.2
    },
    'solver': {
        'type': 'segregated',
        'momentum_scheme': 'second_order_upwind',
        'pressure_scheme': 'PRESTO',
        'coupling': 'SIMPLE',
        'relaxation': {
            'pressure': 0.3,
            'momentum': 0.7
        }
    },
    'convergence': {
        'residuals': 1e-4,
        'monitors': ['outlet_velocity', 'pressure_drop']
    },
    'resources': {
        'cores': 4,
        'memory': '8 GB',
        'time_estimate': '30 minutes'
    }
}
```

### 🟡 MEC CFD Requirements

```python
mec_cfd_config = {
    'mesh': {
        'type': 'hybrid',
        'elements': 500000,
        'boundary_layers': 10,
        'y_plus': 1,  # For wall functions
        'adaptive_refinement': True
    },
    'multiphase': {
        'model': 'VOF',
        'phases': ['liquid', 'hydrogen_gas'],
        'surface_tension': 0.072,  # N/m
        'contact_angle': 140  # degrees
    },
    'solver': {
        'type': 'coupled',
        'scheme': 'PISO',
        'time_step': 'adaptive',
        'courant_number': 0.5
    },
    'resources': {
        'cores': 16,
        'memory': '32 GB',
        'time_estimate': '4 hours'
    }
}
```

### 🟣 MDC CFD Requirements

```python
mdc_cfd_config = {
    'mesh': {
        'type': 'multi-zone',
        'zones': ['anode_chamber', 'cathode_chamber', 'desalination_chamber'],
        'elements_per_zone': 200000,
        'interface_refinement': True
    },
    'physics': {
        'flow': 'laminar',
        'species_transport': True,
        'electrochemistry': True,
        'ion_transport': {
            'species': ['Na+', 'Cl-', 'H+', 'OH-'],
            'electromigration': True,
            'electroneutrality': True
        }
    },
    'solver': {
        'type': 'fully_coupled',
        'linear_solver': 'GMRES',
        'preconditioner': 'AMG',
        'coupling_iterations': 10
    },
    'resources': {
        'cores': 32,
        'memory': '64 GB',
        'time_estimate': '12 hours'
    }
}
```

### 🔴 Electrosynthesis CFD Requirements

```python
synthesis_cfd_config = {
    'mesh': {
        'type': 'polyhedral',
        'elements': 5000000,
        'near_wall_treatment': 'enhanced_wall_function',
        'prism_layers': 20
    },
    'multiphase': {
        'model': 'Eulerian',
        'phases': ['liquid', 'CO2_gas', 'product_bubbles'],
        'population_balance': True,
        'breakup_coalescence': True
    },
    'reactions': {
        'electrochemical': True,
        'homogeneous': True,
        'surface_reactions': True,
        'stiff_chemistry_solver': 'CVODE'
    },
    'turbulence': {
        'model': 'SST_k_omega',
        'near_wall_treatment': 'automatic'
    },
    'resources': {
        'cores': 64,
        'memory': '128 GB',
        'gpu_acceleration': True,
        'time_estimate': '24-48 hours'
    }
}
```

## Software Tools and Platforms

### Commercial CFD Software

#### ANSYS Fluent

```python
# Fluent UDF for MES-specific boundary conditions
def fluent_udf_electrode_bc():
    """User-defined function for electrode boundary in Fluent"""

    udf_code = """
    #include "udf.h"

    DEFINE_PROFILE(electrode_current_density, thread, position)
    {
        real x[ND_ND];
        real overpotential, j0, alpha, j;
        face_t f;

        begin_f_loop(f, thread)
        {
            F_CENTROID(x, f, thread);

            // Butler-Volmer kinetics
            overpotential = F_UDMI(f, thread, 0);  // User-defined memory
            j0 = 1e-4;  // Exchange current density
            alpha = 0.5;  // Transfer coefficient

            j = j0 * (exp(alpha * F * overpotential / (R * T)) -
                     exp(-(1-alpha) * F * overpotential / (R * T)));

            F_PROFILE(f, thread, position) = j;
        }
        end_f_loop(f, thread)
    }
    """

    return udf_code
```

#### COMSOL Multiphysics

```matlab
% COMSOL CFD setup for MES
model = ModelUtil.create('MES_CFD');

% Geometry
geom = model.component('comp1').geom('geom1');
geom.create('blk1', 'Block');
geom.feature('blk1').set('size', [0.1 0.05 0.05]);  % 10x5x5 cm

% Physics - Laminar Flow
flow = model.component('comp1').physics.create('spf', 'LaminarFlow', 'geom1');
flow.feature('init1').set('u', {'0', '0.01', '0'});  % Initial velocity

% Mesh
mesh = model.component('comp1').mesh('mesh1');
mesh.autoMeshSize(3);  % Fine mesh
mesh.run();

% Study
study = model.study.create('std1');
study.create('stat', 'Stationary');
study.feature('stat').set('mesh', {'geom1' 'mesh1'});

% Solve
model.sol('sol1').runAll();
```

### Open-Source CFD Tools

#### OpenFOAM Implementation

```cpp
// OpenFOAM solver for MES with electrochemistry coupling
#include "fvCFD.H"
#include "singlePhaseTransportModel.H"
#include "turbulentTransportModel.H"

int main(int argc, char *argv[])
{
    #include "setRootCase.H"
    #include "createTime.H"
    #include "createMesh.H"
    #include "createFields.H"

    // Main time loop
    while (runTime.loop())
    {
        Info<< "Time = " << runTime.timeName() << nl << endl;

        // Momentum predictor
        fvVectorMatrix UEqn
        (
            fvm::ddt(U)
          + fvm::div(phi, U)
          - fvm::laplacian(nu, U)
          ==
            electrochemicalSource  // MES-specific source term
        );

        UEqn.relax();
        solve(UEqn == -fvc::grad(p));

        // Pressure correction (PISO loop)
        for (int corr=0; corr<nCorr; corr++)
        {
            volScalarField rAU(1.0/UEqn.A());
            volVectorField HbyA(constrainHbyA(rAU*UEqn.H(), U, p));
            surfaceScalarField phiHbyA("phiHbyA", fvc::flux(HbyA));

            // Pressure equation
            fvScalarMatrix pEqn
            (
                fvm::laplacian(rAU, p) == fvc::div(phiHbyA)
            );

            pEqn.solve();

            // Correct flux and velocity
            phi = phiHbyA - pEqn.flux();
            U = HbyA - rAU*fvc::grad(p);
        }

        // Species transport
        solve
        (
            fvm::ddt(C)
          + fvm::div(phi, C)
          - fvm::laplacian(D, C)
          ==
            reactionRate
        );

        runTime.write();
    }

    return 0;
}
```

#### Python CFD with FEniCS

```python
from fenics import *
import numpy as np

class MES_CFD_Solver:
    """CFD solver for MES using FEniCS"""

    def __init__(self, mesh_file, params):
        self.mesh = Mesh(mesh_file)
        self.params = params

        # Define function spaces
        self.V = VectorElement("Lagrange", self.mesh.ufl_cell(), 2)
        self.Q = FiniteElement("Lagrange", self.mesh.ufl_cell(), 1)
        self.element = self.V * self.Q
        self.W = FunctionSpace(self.mesh, self.element)

    def solve_navier_stokes(self):
        """Solve incompressible Navier-Stokes equations"""

        # Test and trial functions
        (v, q) = TestFunctions(self.W)
        w = Function(self.W)
        (u, p) = split(w)

        # Boundary conditions
        bc_inlet = DirichletBC(self.W.sub(0),
                               Constant((self.params['inlet_velocity'], 0, 0)),
                               self.inlet_boundary)
        bc_walls = DirichletBC(self.W.sub(0),
                              Constant((0, 0, 0)),
                              self.wall_boundary)
        bcs = [bc_inlet, bc_walls]

        # Variational formulation
        F = (inner(grad(u)*u, v) +
             self.params['nu']*inner(grad(u), grad(v)) -
             p*div(v) + q*div(u))*dx

        # Add electrochemical source term
        F += inner(self.electrochemical_force(u, p), v)*dx

        # Solve
        solve(F == 0, w, bcs)

        return w.split()
```

## Hardware Requirements and Specifications

### Workstation Configuration

```yaml
cfd_workstation:
  entry_level:
    cpu: 'Intel i9-12900K or AMD Ryzen 9 5950X'
    cores: 16
    ram: '64 GB DDR4-3600'
    gpu: 'NVIDIA RTX 3080 Ti (12 GB)'
    storage: '2 TB NVMe SSD'
    estimated_cost: '$4,000'

  professional:
    cpu: 'Intel Xeon W-3375 or AMD Threadripper PRO'
    cores: 32-64
    ram: '256 GB ECC'
    gpu: 'NVIDIA RTX A6000 (48 GB)'
    storage: '4 TB NVMe RAID 0'
    estimated_cost: '$15,000'

  hpc_node:
    cpu: 'Dual Intel Xeon Platinum 8380'
    cores: 80
    ram: '1 TB DDR4 ECC'
    gpu: '4x NVIDIA A100 (40 GB each)'
    storage: '10 TB NVMe array'
    network: 'InfiniBand HDR 200 Gbps'
    estimated_cost: '$50,000+'
```

## Validation and Verification Methods

### Mesh Independence Study

```python
def mesh_independence_study(geometry, flow_conditions):
    """Perform systematic mesh independence study"""

    mesh_sizes = [1e4, 5e4, 1e5, 5e5, 1e6, 2e6]
    results = []

    for n_elements in mesh_sizes:
        # Generate mesh
        mesh = generate_mesh(geometry, n_elements)

        # Solve CFD
        solver = CFDSolver(mesh, flow_conditions)
        solution = solver.solve_steady_state()

        # Extract key metrics
        pressure_drop = calculate_pressure_drop(solution)
        max_velocity = np.max(solution['velocity'])

        results.append({
            'elements': n_elements,
            'pressure_drop': pressure_drop,
            'max_velocity': max_velocity,
            'cell_quality': mesh.quality_metrics()
        })

        # Check for convergence
        if len(results) > 1:
            relative_change = abs(results[-1]['pressure_drop'] -
                                results[-2]['pressure_drop']) / results[-2]['pressure_drop']

            if relative_change < 0.01:  # 1% criterion
                print(f"Mesh independent at {n_elements} elements")
                break

    return results
```

### Experimental Validation

```python
def validate_cfd_with_piv(cfd_results, piv_data):
    """Validate CFD results against PIV measurements"""

    validation_metrics = {}

    # Interpolate CFD to PIV points
    cfd_interpolated = interpolate_to_points(cfd_results, piv_data['positions'])

    # Calculate error metrics
    velocity_error = np.mean(np.abs(cfd_interpolated['velocity'] -
                                   piv_data['velocity']) / piv_data['velocity'])

    # Correlation coefficient
    from scipy.stats import pearsonr
    correlation, p_value = pearsonr(cfd_interpolated['velocity'].flatten(),
                                   piv_data['velocity'].flatten())

    validation_metrics['relative_error'] = velocity_error
    validation_metrics['correlation'] = correlation
    validation_metrics['p_value'] = p_value

    # Flow pattern comparison
    validation_metrics['flow_pattern_similarity'] = compare_flow_patterns(
        cfd_results, piv_data
    )

    return validation_metrics
```

## Computational Complexity and Scalability

### Parallel Scaling Analysis

```python
def parallel_scaling_study(problem_size, max_cores=128):
    """Analyze parallel scaling efficiency"""

    core_counts = [1, 2, 4, 8, 16, 32, 64, 128]
    scaling_results = []

    # Baseline single-core performance
    t_serial = run_cfd_simulation(problem_size, n_cores=1)

    for n_cores in core_counts:
        # Run parallel simulation
        t_parallel = run_cfd_simulation(problem_size, n_cores=n_cores)

        # Calculate metrics
        speedup = t_serial / t_parallel
        efficiency = speedup / n_cores

        scaling_results.append({
            'cores': n_cores,
            'time': t_parallel,
            'speedup': speedup,
            'efficiency': efficiency
        })

    # Amdahl's Law fitting
    from scipy.optimize import curve_fit

    def amdahl(n, p):
        """Amdahl's law: speedup = 1 / ((1-p) + p/n)"""
        return 1 / ((1 - p) + p / n)

    cores = np.array([r['cores'] for r in scaling_results])
    speedups = np.array([r['speedup'] for r in scaling_results])

    p_optimal, _ = curve_fit(amdahl, cores, speedups)

    return scaling_results, p_optimal[0]
```

## Best Practices and Guidelines

### Pre-Processing Best Practices

1. **Geometry Preparation**

   - Simplify CAD geometry (remove small features < 1% of characteristic length)
   - Ensure watertight geometry
   - Use symmetry when applicable
   - Decompose complex domains

2. **Mesh Quality Criteria**

   ```python
   mesh_quality_criteria = {
       'skewness': {'excellent': 0.25, 'good': 0.5, 'acceptable': 0.8, 'poor': 0.95},
       'aspect_ratio': {'max_acceptable': 100, 'target': 10},
       'orthogonality': {'min_angle': 45, 'target': 90},
       'expansion_ratio': {'max': 1.2, 'boundary_layer': 1.1}
   }
   ```

3. **Boundary Conditions**
   - Use velocity inlet for known flow rates
   - Pressure outlet for open boundaries
   - No-slip walls for solid surfaces
   - Symmetry planes to reduce domain size

### Solver Settings Guidelines

```python
solver_recommendations = {
    'steady_laminar': {
        'algorithm': 'SIMPLE',
        'discretization': 'second_order_upwind',
        'relaxation': {'pressure': 0.3, 'momentum': 0.7}
    },
    'transient_laminar': {
        'algorithm': 'PISO',
        'time_scheme': 'second_order_implicit',
        'courant_number': 0.5
    },
    'turbulent': {
        'model': 'SST_k_omega',
        'wall_treatment': 'enhanced_wall_function',
        'y_plus': 1
    },
    'multiphase': {
        'method': 'VOF',
        'interface_reconstruction': 'geo_reconstruct',
        'surface_tension': 'CSF'
    }
}
```

## Key Relationships

### Strongly Correlated With:

- **Reynolds Number** (r² = 0.96): Determines flow regime
- **Peclet Number** (r² = 0.93): Convection vs. diffusion
- **Mesh Density** (r² = 0.91): Solution accuracy
- **Time Step** (r² = 0.89): Temporal accuracy
- **Convergence Rate** (r² = 0.87): Solver efficiency

### Inversely Related To:

- **Computational Time** (r² = -0.94): Finer mesh = longer time
- **Numerical Diffusion** (r² = -0.88): Higher order = less diffusion
- **Courant Number** (r² = -0.85): Stability constraint

### Complex Interactions:

- **Turbulence-Chemistry**: Reaction rates affected by mixing
- **Multiphase-Electrochemistry**: Bubble formation affects current
- **Heat-Flow Coupling**: Buoyancy-driven convection
- **FSI**: Biofilm deformation under flow

## Visualization Recommendations

1. **Velocity Vectors**: Colored by magnitude, scaled arrows
2. **Streamlines**: 3D pathlines for flow visualization
3. **Pressure Contours**: With gradient vectors
4. **Vorticity Isosurfaces**: For turbulence structures
5. **Volume Rendering**: For concentration fields
6. **Animation**: Time-dependent phenomena

## Recent Research Insights

Recent advances in CFD for MES (2023-2025):

1. **Machine Learning Acceleration**: 100x speedup using neural operators
2. **GPU Computing**: Real-time simulations on modern GPUs
3. **Adaptive Mesh Refinement**: Dynamic mesh adaptation
4. **LBM Methods**: Lattice Boltzmann for complex geometries
5. **Quantum CFD**: Quantum algorithms for turbulence

## Summary

CFD is essential for understanding and optimizing flow patterns, mass transfer,
and mixing in MES systems. Success requires careful attention to mesh quality,
appropriate physics models, solver settings, and validation. Modern developments
in GPU computing, machine learning, and adaptive methods are making CFD more
accessible and powerful for MES applications. The key is selecting the right
level of model complexity for the specific application while maintaining
computational efficiency.
