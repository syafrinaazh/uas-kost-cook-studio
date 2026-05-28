import { useNavigate } from "react-router-dom";
import { COLORS, RECIPES } from "../data";
import TopNav from "../components/TopNav";
import RecipeRow from "../components/RecipeRow";
import BottomNav from "../components/BottomNav";

export default function Simpan() {
  const navigate = useNavigate();

  // Filter resep yang memiliki status 'saved: true'
  const savedRecipes = RECIPES.filter((recipe) => recipe.saved === true);

  return (
    <div style={{ backgroundColor: COLORS.cream, minHeight: "100vh", paddingBottom: "80px" }}>
      <TopNav title="Resep Tersimpan" />

      <div style={{ padding: "20px" }}>
        {savedRecipes.length > 0 ? (
          savedRecipes.map((recipe) => (
            <RecipeRow 
              key={recipe.id} 
              recipe={recipe} 
              onClick={() => navigate(`/detail/${recipe.id}`)} 
            />
          ))
        ) : (
          <div style={{ 
            textAlign: "center", 
            marginTop: "50px", 
            color: COLORS.textLight 
          }}>
            <div style={{ fontSize: "50px", marginBottom: "10px" }}>🔖</div>
            <p>Belum ada resep yang disimpan.</p>
            <p style={{ fontSize: "14px" }}>
              Cari resep favoritmu dan simpan untuk nanti!
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}