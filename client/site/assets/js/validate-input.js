'use strict';

function validate_M1000_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M1000 primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 6.1443e+12 || field > 3.6429e+15 ) ? "M1000 primary cluster = "+ field +": beyond limits (6.1443e+12, 3.6429e+15)\n" : "";
	}
}

function validate_M1000_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M1000 subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1.227e+15 ) ? "M1000 subcluster = "+ field +": beyond limits (0, 1.227e+15)\n" : "";
	}
}

function validate_M200_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M200  primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.0129e+13 || field > 5.43e+15 ) ? "M200  primary cluster = "+ field +": beyond limits (1.0129e+13, 5.43e+15)\n" : "";
	}
}

function validate_M200_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M200  subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 2.1175e+15 ) ? "M200  subcluster = "+ field +": beyond limits (0, 2.1175e+15)\n" : "";
	}
}

function validate_M2500_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M2500 primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 3.6668e+12 || field > 2.3638e+15 ) ? "M2500 primary cluster = "+ field +": beyond limits (3.6668e+12, 2.3638e+15)\n" : "";
	}
}

function validate_M2500_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M2500 subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 8.6825e+14 ) ? "M2500 subcluster = "+ field +": beyond limits (0, 8.6825e+14)\n" : "";
	}
}

function validate_M500_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M500  primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 7.6629e+12 || field > 4.5599e+15 ) ? "M500  primary cluster = "+ field +": beyond limits (7.6629e+12, 4.5599e+15)\n" : "";
	}
}

function validate_M500_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "M500  subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1.6179e+15 ) ? "M500  subcluster = "+ field +": beyond limits (0, 1.6179e+15)\n" : "";
	}
}

function validate_R1000_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R1000 primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 220.732 || field > 1854.35 ) ? "R1000 primary cluster = "+ field +": beyond limits (220.732, 1854.35)\n" : "";
	}
}

function validate_R1000_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R1000 subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1290.21 ) ? "R1000 subcluster = "+ field +": beyond limits (0, 1290.21)\n" : "";
	}
}

function validate_R200_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R200  primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 445.889 || field > 3622.14 ) ? "R200  primary cluster = "+ field +": beyond limits (445.889, 3622.14)\n" : "";
	}
}

function validate_R200_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R200  subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 2646.32 ) ? "R200  subcluster = "+ field +": beyond limits (0, 2646.32)\n" : "";
	}
}

function validate_R2500_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R2500 primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 136.928 || field > 1182.86 ) ? "R2500 primary cluster = "+ field +": beyond limits (136.928, 1182.86)\n" : "";
	}
}

function validate_R2500_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R2500 subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 847.118 ) ? "R2500 subcluster = "+ field +": beyond limits (0, 847.118)\n" : "";
	}
}

function validate_R500_1( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R500  primary cluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 299.354 || field > 2517.89 ) ? "R500  primary cluster = "+ field +": beyond limits (299.354, 2517.89)\n" : "";
	}
}

function validate_R500_2( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "R500  subcluster: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1782.54 ) ? "R500  subcluster = "+ field +": beyond limits (0, 1782.54)\n" : "";
	}
}

function validate_dist( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Cluster Distance: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 7037.48 ) ? "Cluster Distance = "+ field +": beyond limits (0, 7037.48)\n" : "";
	}
}

function validate_m200_tot( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Total M200: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.0459e+13 || field > 5.43e+15 ) ? "Total M200 = "+ field +": beyond limits (1.0459e+13, 5.43e+15)\n" : "";
	}
}

function validate_m500_tot( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Total M500: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 8.6461e+12 || field > 4.5599e+15 ) ? "Total M500 = "+ field +": beyond limits (8.6461e+12, 4.5599e+15)\n" : "";
	}
}

function validate_vrel( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Relative Velocity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 3782.22 ) ? "Relative Velocity = "+ field +": beyond limits (0, 3782.22)\n" : "";
	}
}

function validate_Broad( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Broad band temperature: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.442 || field > 27.024 ) ? "Broad band temperature = "+ field +": beyond limits (0.442, 27.024)\n" : "";
	}
}

function validate_Hard( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Hard band temperature: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.513 || field > 27.292 ) ? "Hard band temperature = "+ field +": beyond limits (0.513, 27.292)\n" : "";
	}
}

function validate_Ratio( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Hardness ratio (hard / broad): value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.002 || field > 1.684 ) ? "Hardness ratio (hard / broad) = "+ field +": beyond limits (1.002, 1.684)\n" : "";
	}
}

function validate_YSZ( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Volume SZE, Freq-independent: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 3.1778e-08 || field > 0.0021578 ) ? "Volume SZE, Freq-independent = "+ field +": beyond limits (3.1778e-08, 0.0021578)\n" : "";
	}
}

function validate_kSZE_150( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Kinetic SZE @ 150 GHz: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < -1.2293e-06 || field > 6.3413e-07 ) ? "Kinetic SZE @ 150 GHz = "+ field +": beyond limits (-1.2293e-06, 6.3413e-07)\n" : "";
	}
}

function validate_kSZE_220( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Kinetic SZE @ 220 GHz: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < -1.1745e-06 || field > 6.7511e-07 ) ? "Kinetic SZE @ 220 GHz = "+ field +": beyond limits (-1.1745e-06, 6.7511e-07)\n" : "";
	}
}

function validate_kSZE_350( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Kinetic SZE @ 350 GHz: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < -1.2939e-06 || field > 8.5515e-07 ) ? "Kinetic SZE @ 350 GHz = "+ field +": beyond limits (-1.2939e-06, 8.5515e-07)\n" : "";
	}
}

function validate_kSZE_nr( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Freq-independent Kinetic SZE, no Rel-cor: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < -1.1087e-06 || field > 8.5809e-07 ) ? "Freq-independent Kinetic SZE, no Rel-cor = "+ field +": beyond limits (-1.1087e-06, 8.5809e-07)\n" : "";
	}
}

function validate_tSZE_150( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Thermal SZE @ 150 GHz: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < -0.0016316 || field > -3.0197e-08 ) ? "Thermal SZE @ 150 GHz = "+ field +": beyond limits (-0.0016316, -3.0197e-08)\n" : "";
	}
}

function validate_tSZE_220( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Thermal SZE @ 220 GHz: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < -0.00018017 || field > 3.2226e-07 ) ? "Thermal SZE @ 220 GHz = "+ field +": beyond limits (-0.00018017, 3.2226e-07)\n" : "";
	}
}

function validate_tSZE_350( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Thermal SZE @ 350 GHz: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 6.9149e-08 || field > 0.0031152 ) ? "Thermal SZE @ 350 GHz = "+ field +": beyond limits (6.9149e-08, 0.0031152)\n" : "";
	}
}

function validate_tSZE_nr( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Freq-independent Thermal SZE, no Rel-cor: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 3.1778e-08 || field > 0.0021657 ) ? "Freq-independent Thermal SZE, no Rel-cor = "+ field +": beyond limits (3.1778e-08, 0.0021657)\n" : "";
	}
}

function validate_Lx_b_a( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Bolometric APEC Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.3236e+42 || field > 5.692e+46 ) ? "Bolometric APEC Luminosity = "+ field +": beyond limits (1.3236e+42, 5.692e+46)\n" : "";
	}
}

function validate_Lx_b_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Bolometric MeKaL Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.3161e+42 || field > 6.5608e+46 ) ? "Bolometric MeKaL Luminosity = "+ field +": beyond limits (1.3161e+42, 6.5608e+46)\n" : "";
	}
}

function validate_Lx_c_a( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.7-7] APEC Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 4.3049e+41 || field > 1.9002e+46 ) ? "[0.7-7] APEC Luminosity = "+ field +": beyond limits (4.3049e+41, 1.9002e+46)\n" : "";
	}
}

function validate_Lx_c_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.7-7] MeKaL Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 5.0727e+41 || field > 1.9446e+46 ) ? "[0.7-7] MeKaL Luminosity = "+ field +": beyond limits (5.0727e+41, 1.9446e+46)\n" : "";
	}
}

function validate_Lx_r_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[2-10] MeKaL Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 9.0907e+39 || field > 1.9955e+46 ) ? "[2-10] MeKaL Luminosity = "+ field +": beyond limits (9.0907e+39, 1.9955e+46)\n" : "";
	}
}

function validate_Lx_w_a( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.5-4] APEC Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 5.8444e+41 || field > 1.2599e+46 ) ? "[0.5-4] APEC Luminosity = "+ field +": beyond limits (5.8444e+41, 1.2599e+46)\n" : "";
	}
}

function validate_Lx_w_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.5-4] MeKaL Luminosity: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 6.6725e+41 || field > 1.2843e+46 ) ? "[0.5-4] MeKaL Luminosity = "+ field +": beyond limits (6.6725e+41, 1.2843e+46)\n" : "";
	}
}

function validate_Tmg( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Mass-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.3489 || field > 21.2828 ) ? "Mass-Weighted temp = "+ field +": beyond limits (0.3489, 21.2828)\n" : "";
	}
}

function validate_Tsl( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Spectroscopic-like Temp (V06): value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.4104 || field > 27.0075 ) ? "Spectroscopic-like Temp (V06) = "+ field +": beyond limits (0.4104, 27.0075)\n" : "";
	}
}

function validate_Tx_b_a( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Bolometric APEC Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.4146 || field > 31.5857 ) ? "Bolometric APEC Emission-Weighted temp = "+ field +": beyond limits (0.4146, 31.5857)\n" : "";
	}
}

function validate_Tx_b_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Bolometric MeKaL Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.4123 || field > 36.9809 ) ? "Bolometric MeKaL Emission-Weighted temp = "+ field +": beyond limits (0.4123, 36.9809)\n" : "";
	}
}

function validate_Tx_c_a( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.7-7] APEC Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.472 || field > 30.456 ) ? "[0.7-7] APEC Emission-Weighted temp = "+ field +": beyond limits (0.472, 30.456)\n" : "";
	}
}

function validate_Tx_c_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.7-7] MeKaL Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.547 || field > 31.2036 ) ? "[0.7-7] MeKaL Emission-Weighted temp = "+ field +": beyond limits (0.547, 31.2036)\n" : "";
	}
}

function validate_Tx_r_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[2-10] MeKaL Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.5295 || field > 30.7964 ) ? "[2-10] MeKaL Emission-Weighted temp = "+ field +": beyond limits (0.5295, 30.7964)\n" : "";
	}
}

function validate_Tx_w_a( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.5-4] APEC Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.4525 || field > 30.2527 ) ? "[0.5-4] APEC Emission-Weighted temp = "+ field +": beyond limits (0.4525, 30.2527)\n" : "";
	}
}

function validate_Tx_w_m( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "[0.5-4] MeKaL Emission-Weighted temp: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.4455 || field > 30.2874 ) ? "[0.5-4] MeKaL Emission-Weighted temp = "+ field +": beyond limits (0.4455, 30.2874)\n" : "";
	}
}

function validate_Yx( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "X-ray proxy for Thermal Energy: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 2.6781e+11 || field > 1.9185e+16 ) ? "X-ray proxy for Thermal Energy = "+ field +": beyond limits (2.6781e+11, 1.9185e+16)\n" : "";
	}
}

function validate_Asymmetry( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Hashimoto et al. (2007) def: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.006685 || field > 0.7693 ) ? "Hashimoto et al. (2007) def = "+ field +": beyond limits (0.006685, 0.7693)\n" : "";
	}
}

function validate_AxialRatio( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "O'Hara et al. (2006) def: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.1001 || field > 0.99978 ) ? "O'Hara et al. (2006) def = "+ field +": beyond limits (0.1001, 0.99978)\n" : "";
	}
}

function validate_Dctr_pr( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Centroid-PRcen dist: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1005.72 ) ? "Centroid-PRcen dist = "+ field +": beyond limits (0, 1005.72)\n" : "";
	}
}

function validate_Dpk_cen( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Peak--proj.center dist: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1.0661 ) ? "Peak--proj.center dist = "+ field +": beyond limits (0, 1.0661)\n" : "";
	}
}

function validate_Dpk_pr( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Peak--PR center dist: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 9.4161e-06 || field > 1006 ) ? "Peak--PR center dist = "+ field +": beyond limits (9.4161e-06, 1006)\n" : "";
	}
}

function validate_Ellipticity( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Hashimoto et al. (2007) def: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0.00020787 || field > 0.82659 ) ? "Hashimoto et al. (2007) def = "+ field +": beyond limits (0.00020787, 0.82659)\n" : "";
	}
}

function validate_P1P0_pk( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Power ratio ord=1 about peak: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 4.8237e-13 || field > 0.0011286 ) ? "Power ratio ord=1 about peak = "+ field +": beyond limits (4.8237e-13, 0.0011286)\n" : "";
	}
}

function validate_P2P0_1C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P2/P0 ratio w/in  500.0 kpc, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.000436 ) ? "P2/P0 ratio w/in  500.0 kpc, core included = "+ field +": beyond limits (0, 0.000436)\n" : "";
	}
}

function validate_P2P0_1E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P2/P0 ratio w/in (  30.0-- 500.0) kpc: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.0004377 ) ? "P2/P0 ratio w/in (  30.0-- 500.0) kpc = "+ field +": beyond limits (0, 0.0004377)\n" : "";
	}
}

function validate_P2P0_2C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P2/P0 ratio w/in 1000.0 kpc, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.0004887 ) ? "P2/P0 ratio w/in 1000.0 kpc, core included = "+ field +": beyond limits (0, 0.0004887)\n" : "";
	}
}

function validate_P2P0_2E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P2/P0 ratio w/in (  30.0--1000.0) kpc: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.0004889 ) ? "P2/P0 ratio w/in (  30.0--1000.0) kpc = "+ field +": beyond limits (0, 0.0004889)\n" : "";
	}
}

function validate_P2P0_R500C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P2/P0 ratio w/in 1.0 R500, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 6.825e-13 || field > 0.000149 ) ? "P2/P0 ratio w/in 1.0 R500, core included = "+ field +": beyond limits (6.825e-13, 0.000149)\n" : "";
	}
}

function validate_P2P0_R500E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P2/P0 ratio w/in (0.05--1.0) R500: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 5.381e-13 || field > 0.0001496 ) ? "P2/P0 ratio w/in (0.05--1.0) R500 = "+ field +": beyond limits (5.381e-13, 0.0001496)\n" : "";
	}
}

function validate_P3P0_1C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P3/P0 ratio w/in  500.0 kpc, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 9.259e-05 ) ? "P3/P0 ratio w/in  500.0 kpc, core included = "+ field +": beyond limits (0, 9.259e-05)\n" : "";
	}
}

function validate_P3P0_1E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P3/P0 ratio w/in (  30.0-- 500.0) kpc: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 9.295e-05 ) ? "P3/P0 ratio w/in (  30.0-- 500.0) kpc = "+ field +": beyond limits (0, 9.295e-05)\n" : "";
	}
}

function validate_P3P0_2C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P3/P0 ratio w/in 1000.0 kpc, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1.076e-05 ) ? "P3/P0 ratio w/in 1000.0 kpc, core included = "+ field +": beyond limits (0, 1.076e-05)\n" : "";
	}
}

function validate_P3P0_2E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P3/P0 ratio w/in (  30.0--1000.0) kpc: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 1.077e-05 ) ? "P3/P0 ratio w/in (  30.0--1000.0) kpc = "+ field +": beyond limits (0, 1.077e-05)\n" : "";
	}
}

function validate_P3P0_R500C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P3/P0 ratio w/in 1.0 R500, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 8.909e-16 || field > 2.753e-05 ) ? "P3/P0 ratio w/in 1.0 R500, core included = "+ field +": beyond limits (8.909e-16, 2.753e-05)\n" : "";
	}
}

function validate_P3P0_R500E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P3/P0 ratio w/in (0.05--1.0) R500: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.006e-15 || field > 3.286e-05 ) ? "P3/P0 ratio w/in (0.05--1.0) R500 = "+ field +": beyond limits (1.006e-15, 3.286e-05)\n" : "";
	}
}

function validate_P4P0_1C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P4/P0 ratio w/in  500.0 kpc, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 2.736e-05 ) ? "P4/P0 ratio w/in  500.0 kpc, core included = "+ field +": beyond limits (0, 2.736e-05)\n" : "";
	}
}

function validate_P4P0_1E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P4/P0 ratio w/in (  30.0-- 500.0) kpc: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 2.746e-05 ) ? "P4/P0 ratio w/in (  30.0-- 500.0) kpc = "+ field +": beyond limits (0, 2.746e-05)\n" : "";
	}
}

function validate_P4P0_2C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P4/P0 ratio w/in 1000.0 kpc, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 4.522e-05 ) ? "P4/P0 ratio w/in 1000.0 kpc, core included = "+ field +": beyond limits (0, 4.522e-05)\n" : "";
	}
}

function validate_P4P0_2E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P4/P0 ratio w/in (  30.0--1000.0) kpc: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 4.524e-05 ) ? "P4/P0 ratio w/in (  30.0--1000.0) kpc = "+ field +": beyond limits (0, 4.524e-05)\n" : "";
	}
}

function validate_P4P0_R500C( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P4/P0 ratio w/in 1.0 R500, core included: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 4.989e-16 || field > 1.072e-05 ) ? "P4/P0 ratio w/in 1.0 R500, core included = "+ field +": beyond limits (4.989e-16, 1.072e-05)\n" : "";
	}
}

function validate_P4P0_R500E( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "P4/P0 ratio w/in (0.05--1.0) R500: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 6.503e-16 || field > 1.279e-05 ) ? "P4/P0 ratio w/in (0.05--1.0) R500 = "+ field +": beyond limits (6.503e-16, 1.279e-05)\n" : "";
	}
}

function validate_Wctr( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "Centroid Shift: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 1.8264e-05 || field > 0.13509 ) ? "Centroid Shift = "+ field +": beyond limits (1.8264e-05, 0.13509)\n" : "";
	}
}

function validate_D150( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "150 GHz Peak--proj.center dist: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.27045 ) ? "150 GHz Peak--proj.center dist = "+ field +": beyond limits (0, 0.27045)\n" : "";
	}
}

function validate_D350( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "350 GHz Peak--proj.center dist: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.27045 ) ? "350 GHz Peak--proj.center dist = "+ field +": beyond limits (0, 0.27045)\n" : "";
	}
}

function validate_Dnr( field )
{
	if( ! field )
	{
		return "";
	}
	else if( isNaN( field ) )
	{
		return "NR Peak--proj.center dist: value= '"+ field +"' is Not a Number";
	}
	else
	{
		return ( field < 0 || field > 0.27045 ) ? "NR Peak--proj.center dist = "+ field +": beyond limits (0, 0.27045)\n" : "";
	}
}

function validate_valuesEntered( form )
{
	var str_values = ""
	if( form.M1000_1 )
	{
		str_values += form.M1000_1.value.toString();
	}
	if( form.M1000_2 )
	{
		str_values += form.M1000_2.value.toString();
	}
	if( form.M200_1 )
	{
		str_values += form.M200_1.value.toString();
	}
	if( form.M200_2 )
	{
		str_values += form.M200_2.value.toString();
	}
	if( form.M2500_1 )
	{
		str_values += form.M2500_1.value.toString();
	}
	if( form.M2500_2 )
	{
		str_values += form.M2500_2.value.toString();
	}
	if( form.M500_1 )
	{
		str_values += form.M500_1.value.toString();
	}
	if( form.M500_2 )
	{
		str_values += form.M500_2.value.toString();
	}
	if( form.R1000_1 )
	{
		str_values += form.R1000_1.value.toString();
	}
	if( form.R1000_2 )
	{
		str_values += form.R1000_2.value.toString();
	}
	if( form.R200_1 )
	{
		str_values += form.R200_1.value.toString();
	}
	if( form.R200_2 )
	{
		str_values += form.R200_2.value.toString();
	}
	if( form.R2500_1 )
	{
		str_values += form.R2500_1.value.toString();
	}
	if( form.R2500_2 )
	{
		str_values += form.R2500_2.value.toString();
	}
	if( form.R500_1 )
	{
		str_values += form.R500_1.value.toString();
	}
	if( form.R500_2 )
	{
		str_values += form.R500_2.value.toString();
	}
	if( form.dist )
	{
		str_values += form.dist.value.toString();
	}
	if( form.m200_tot )
	{
		str_values += form.m200_tot.value.toString();
	}
	if( form.m500_tot )
	{
		str_values += form.m500_tot.value.toString();
	}
	if( form.vrel )
	{
		str_values += form.vrel.value.toString();
	}
	if( form.Broad )
	{
		str_values += form.Broad.value.toString();
	}
	if( form.Hard )
	{
		str_values += form.Hard.value.toString();
	}
	if( form.Ratio )
	{
		str_values += form.Ratio.value.toString();
	}
	if( form.YSZ )
	{
		str_values += form.YSZ.value.toString();
	}
	if( form.kSZE_150 )
	{
		str_values += form.kSZE_150.value.toString();
	}
	if( form.kSZE_220 )
	{
		str_values += form.kSZE_220.value.toString();
	}
	if( form.kSZE_350 )
	{
		str_values += form.kSZE_350.value.toString();
	}
	if( form.kSZE_nr )
	{
		str_values += form.kSZE_nr.value.toString();
	}
	if( form.tSZE_150 )
	{
		str_values += form.tSZE_150.value.toString();
	}
	if( form.tSZE_220 )
	{
		str_values += form.tSZE_220.value.toString();
	}
	if( form.tSZE_350 )
	{
		str_values += form.tSZE_350.value.toString();
	}
	if( form.tSZE_nr )
	{
		str_values += form.tSZE_nr.value.toString();
	}
	if( form.Lx_b_a )
	{
		str_values += form.Lx_b_a.value.toString();
	}
	if( form.Lx_b_m )
	{
		str_values += form.Lx_b_m.value.toString();
	}
	if( form.Lx_c_a )
	{
		str_values += form.Lx_c_a.value.toString();
	}
	if( form.Lx_c_m )
	{
		str_values += form.Lx_c_m.value.toString();
	}
	if( form.Lx_r_m )
	{
		str_values += form.Lx_r_m.value.toString();
	}
	if( form.Lx_w_a )
	{
		str_values += form.Lx_w_a.value.toString();
	}
	if( form.Lx_w_m )
	{
		str_values += form.Lx_w_m.value.toString();
	}
	if( form.Tmg )
	{
		str_values += form.Tmg.value.toString();
	}
	if( form.Tsl )
	{
		str_values += form.Tsl.value.toString();
	}
	if( form.Tx_b_a )
	{
		str_values += form.Tx_b_a.value.toString();
	}
	if( form.Tx_b_m )
	{
		str_values += form.Tx_b_m.value.toString();
	}
	if( form.Tx_c_a )
	{
		str_values += form.Tx_c_a.value.toString();
	}
	if( form.Tx_c_m )
	{
		str_values += form.Tx_c_m.value.toString();
	}
	if( form.Tx_r_m )
	{
		str_values += form.Tx_r_m.value.toString();
	}
	if( form.Tx_w_a )
	{
		str_values += form.Tx_w_a.value.toString();
	}
	if( form.Tx_w_m )
	{
		str_values += form.Tx_w_m.value.toString();
	}
	if( form.Yx )
	{
		str_values += form.Yx.value.toString();
	}
	if( form.Asymmetry )
	{
		str_values += form.Asymmetry.value.toString();
	}
	if( form.AxialRatio )
	{
		str_values += form.AxialRatio.value.toString();
	}
	if( form.Dctr_pr )
	{
		str_values += form.Dctr_pr.value.toString();
	}
	if( form.Dpk_cen )
	{
		str_values += form.Dpk_cen.value.toString();
	}
	if( form.Dpk_pr )
	{
		str_values += form.Dpk_pr.value.toString();
	}
	if( form.Ellipticity )
	{
		str_values += form.Ellipticity.value.toString();
	}
	if( form.P1P0_pk )
	{
		str_values += form.P1P0_pk.value.toString();
	}
	if( form.P2P0_1C )
	{
		str_values += form.P2P0_1C.value.toString();
	}
	if( form.P2P0_1E )
	{
		str_values += form.P2P0_1E.value.toString();
	}
	if( form.P2P0_2C )
	{
		str_values += form.P2P0_2C.value.toString();
	}
	if( form.P2P0_2E )
	{
		str_values += form.P2P0_2E.value.toString();
	}
	if( form.P2P0_R500C )
	{
		str_values += form.P2P0_R500C.value.toString();
	}
	if( form.P2P0_R500E )
	{
		str_values += form.P2P0_R500E.value.toString();
	}
	if( form.P3P0_1C )
	{
		str_values += form.P3P0_1C.value.toString();
	}
	if( form.P3P0_1E )
	{
		str_values += form.P3P0_1E.value.toString();
	}
	if( form.P3P0_2C )
	{
		str_values += form.P3P0_2C.value.toString();
	}
	if( form.P3P0_2E )
	{
		str_values += form.P3P0_2E.value.toString();
	}
	if( form.P3P0_R500C )
	{
		str_values += form.P3P0_R500C.value.toString();
	}
	if( form.P3P0_R500E )
	{
		str_values += form.P3P0_R500E.value.toString();
	}
	if( form.P4P0_1C )
	{
		str_values += form.P4P0_1C.value.toString();
	}
	if( form.P4P0_1E )
	{
		str_values += form.P4P0_1E.value.toString();
	}
	if( form.P4P0_2C )
	{
		str_values += form.P4P0_2C.value.toString();
	}
	if( form.P4P0_2E )
	{
		str_values += form.P4P0_2E.value.toString();
	}
	if( form.P4P0_R500C )
	{
		str_values += form.P4P0_R500C.value.toString();
	}
	if( form.P4P0_R500E )
	{
		str_values += form.P4P0_R500E.value.toString();
	}
	if( form.Wctr )
	{
		str_values += form.Wctr.value.toString();
	}
	if( form.D150 )
	{
		str_values += form.D150.value.toString();
	}
	if( form.D350 )
	{
		str_values += form.D350.value.toString();
	}
	if( form.Dnr )
	{
		str_values += form.Dnr.value.toString();
	}

	if( str_values == "" )
	{
		alert( "No values entered" );
		return false;
	}
	else
	{
		return true;
	}
}

function validate_valuesInBounds( form )
{
	var fail = ""
	if( form.M1000_1 )
	{
		fail += validate_M1000_1 ( form.M1000_1.value );
	}
	if( form.M1000_2 )
	{
		fail += validate_M1000_2 ( form.M1000_2.value );
	}
	if( form.M200_1 )
	{
		fail += validate_M200_1 ( form.M200_1.value );
	}
	if( form.M200_2 )
	{
		fail += validate_M200_2 ( form.M200_2.value );
	}
	if( form.M2500_1 )
	{
		fail += validate_M2500_1 ( form.M2500_1.value );
	}
	if( form.M2500_2 )
	{
		fail += validate_M2500_2 ( form.M2500_2.value );
	}
	if( form.M500_1 )
	{
		fail += validate_M500_1 ( form.M500_1.value );
	}
	if( form.M500_2 )
	{
		fail += validate_M500_2 ( form.M500_2.value );
	}
	if( form.R1000_1 )
	{
		fail += validate_R1000_1 ( form.R1000_1.value );
	}
	if( form.R1000_2 )
	{
		fail += validate_R1000_2 ( form.R1000_2.value );
	}
	if( form.R200_1 )
	{
		fail += validate_R200_1 ( form.R200_1.value );
	}
	if( form.R200_2 )
	{
		fail += validate_R200_2 ( form.R200_2.value );
	}
	if( form.R2500_1 )
	{
		fail += validate_R2500_1 ( form.R2500_1.value );
	}
	if( form.R2500_2 )
	{
		fail += validate_R2500_2 ( form.R2500_2.value );
	}
	if( form.R500_1 )
	{
		fail += validate_R500_1 ( form.R500_1.value );
	}
	if( form.R500_2 )
	{
		fail += validate_R500_2 ( form.R500_2.value );
	}
	if( form.dist )
	{
		fail += validate_dist ( form.dist.value );
	}
	if( form.m200_tot )
	{
		fail += validate_m200_tot ( form.m200_tot.value );
	}
	if( form.m500_tot )
	{
		fail += validate_m500_tot ( form.m500_tot.value );
	}
	if( form.vrel )
	{
		fail += validate_vrel ( form.vrel.value );
	}
	if( form.Broad )
	{
		fail += validate_Broad ( form.Broad.value );
	}
	if( form.Hard )
	{
		fail += validate_Hard ( form.Hard.value );
	}
	if( form.Ratio )
	{
		fail += validate_Ratio ( form.Ratio.value );
	}
	if( form.YSZ )
	{
		fail += validate_YSZ ( form.YSZ.value );
	}
	if( form.kSZE_150 )
	{
		fail += validate_kSZE_150 ( form.kSZE_150.value );
	}
	if( form.kSZE_220 )
	{
		fail += validate_kSZE_220 ( form.kSZE_220.value );
	}
	if( form.kSZE_350 )
	{
		fail += validate_kSZE_350 ( form.kSZE_350.value );
	}
	if( form.kSZE_nr )
	{
		fail += validate_kSZE_nr ( form.kSZE_nr.value );
	}
	if( form.tSZE_150 )
	{
		fail += validate_tSZE_150 ( form.tSZE_150.value );
	}
	if( form.tSZE_220 )
	{
		fail += validate_tSZE_220 ( form.tSZE_220.value );
	}
	if( form.tSZE_350 )
	{
		fail += validate_tSZE_350 ( form.tSZE_350.value );
	}
	if( form.tSZE_nr )
	{
		fail += validate_tSZE_nr ( form.tSZE_nr.value );
	}
	if( form.Lx_b_a )
	{
		fail += validate_Lx_b_a ( form.Lx_b_a.value );
	}
	if( form.Lx_b_m )
	{
		fail += validate_Lx_b_m ( form.Lx_b_m.value );
	}
	if( form.Lx_c_a )
	{
		fail += validate_Lx_c_a ( form.Lx_c_a.value );
	}
	if( form.Lx_c_m )
	{
		fail += validate_Lx_c_m ( form.Lx_c_m.value );
	}
	if( form.Lx_r_m )
	{
		fail += validate_Lx_r_m ( form.Lx_r_m.value );
	}
	if( form.Lx_w_a )
	{
		fail += validate_Lx_w_a ( form.Lx_w_a.value );
	}
	if( form.Lx_w_m )
	{
		fail += validate_Lx_w_m ( form.Lx_w_m.value );
	}
	if( form.Tmg )
	{
		fail += validate_Tmg ( form.Tmg.value );
	}
	if( form.Tsl )
	{
		fail += validate_Tsl ( form.Tsl.value );
	}
	if( form.Tx_b_a )
	{
		fail += validate_Tx_b_a ( form.Tx_b_a.value );
	}
	if( form.Tx_b_m )
	{
		fail += validate_Tx_b_m ( form.Tx_b_m.value );
	}
	if( form.Tx_c_a )
	{
		fail += validate_Tx_c_a ( form.Tx_c_a.value );
	}
	if( form.Tx_c_m )
	{
		fail += validate_Tx_c_m ( form.Tx_c_m.value );
	}
	if( form.Tx_r_m )
	{
		fail += validate_Tx_r_m ( form.Tx_r_m.value );
	}
	if( form.Tx_w_a )
	{
		fail += validate_Tx_w_a ( form.Tx_w_a.value );
	}
	if( form.Tx_w_m )
	{
		fail += validate_Tx_w_m ( form.Tx_w_m.value );
	}
	if( form.Yx )
	{
		fail += validate_Yx ( form.Yx.value );
	}
	if( form.Asymmetry )
	{
		fail += validate_Asymmetry ( form.Asymmetry.value );
	}
	if( form.AxialRatio )
	{
		fail += validate_AxialRatio ( form.AxialRatio.value );
	}
	if( form.Dctr_pr )
	{
		fail += validate_Dctr_pr ( form.Dctr_pr.value );
	}
	if( form.Dpk_cen )
	{
		fail += validate_Dpk_cen ( form.Dpk_cen.value );
	}
	if( form.Dpk_pr )
	{
		fail += validate_Dpk_pr ( form.Dpk_pr.value );
	}
	if( form.Ellipticity )
	{
		fail += validate_Ellipticity ( form.Ellipticity.value );
	}
	if( form.P1P0_pk )
	{
		fail += validate_P1P0_pk ( form.P1P0_pk.value );
	}
	if( form.P2P0_1C )
	{
		fail += validate_P2P0_1C ( form.P2P0_1C.value );
	}
	if( form.P2P0_1E )
	{
		fail += validate_P2P0_1E ( form.P2P0_1E.value );
	}
	if( form.P2P0_2C )
	{
		fail += validate_P2P0_2C ( form.P2P0_2C.value );
	}
	if( form.P2P0_2E )
	{
		fail += validate_P2P0_2E ( form.P2P0_2E.value );
	}
	if( form.P2P0_R500C )
	{
		fail += validate_P2P0_R500C ( form.P2P0_R500C.value );
	}
	if( form.P2P0_R500E )
	{
		fail += validate_P2P0_R500E ( form.P2P0_R500E.value );
	}
	if( form.P3P0_1C )
	{
		fail += validate_P3P0_1C ( form.P3P0_1C.value );
	}
	if( form.P3P0_1E )
	{
		fail += validate_P3P0_1E ( form.P3P0_1E.value );
	}
	if( form.P3P0_2C )
	{
		fail += validate_P3P0_2C ( form.P3P0_2C.value );
	}
	if( form.P3P0_2E )
	{
		fail += validate_P3P0_2E ( form.P3P0_2E.value );
	}
	if( form.P3P0_R500C )
	{
		fail += validate_P3P0_R500C ( form.P3P0_R500C.value );
	}
	if( form.P3P0_R500E )
	{
		fail += validate_P3P0_R500E ( form.P3P0_R500E.value );
	}
	if( form.P4P0_1C )
	{
		fail += validate_P4P0_1C ( form.P4P0_1C.value );
	}
	if( form.P4P0_1E )
	{
		fail += validate_P4P0_1E ( form.P4P0_1E.value );
	}
	if( form.P4P0_2C )
	{
		fail += validate_P4P0_2C ( form.P4P0_2C.value );
	}
	if( form.P4P0_2E )
	{
		fail += validate_P4P0_2E ( form.P4P0_2E.value );
	}
	if( form.P4P0_R500C )
	{
		fail += validate_P4P0_R500C ( form.P4P0_R500C.value );
	}
	if( form.P4P0_R500E )
	{
		fail += validate_P4P0_R500E ( form.P4P0_R500E.value );
	}
	if( form.Wctr )
	{
		fail += validate_Wctr ( form.Wctr.value );
	}
	if( form.D150 )
	{
		fail += validate_D150 ( form.D150.value );
	}
	if( form.D350 )
	{
		fail += validate_D350 ( form.D350.value );
	}
	if( form.Dnr )
	{
		fail += validate_Dnr ( form.Dnr.value );
	}

	if( fail == "" )
	{
		return true;
	}
	else
	{
		alert( fail );
		return false;
	}
}

function validate( form )
{
	if( ! validate_valuesEntered( form ) )
	{
		return false;
	}

	return validate_valuesInBounds( form );
}
