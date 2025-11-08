import { View, Text, Alert, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants/api";
import { favoritesStyles } from "../../assets/styles/favorites.styles";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import RecipeCard from "../../components/RecipeCard";
import NoFavoritesFound from "../../components/NoFavoritesFound";
import LoadingSpinner from "../../components/LoadingSpinner";

const FavoritesScreen = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        if (!user?.id) {
          console.log("No user ID available");
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_URL}/favorites/${user.id}`);
        if (!response.ok) {
          console.log("Response not OK:", response.status);
          throw new Error("Failed to fetch favorites");
        }

        const favorites = await response.json();
        console.log("Favorites received:", favorites);

        // transform the data to match the RecipeCard component's expected format
        const transformedFavorites = favorites.map((favorite) => ({
          id: favorite.recipeId.toString(), // Ensure id is string
          title: favorite.title,
          image: favorite.image,
          cookTime: favorite.cookTime || "30 minutes",
          servings: favorite.servings || "4",
          category: "Favorite", // Default category
          recipeId: favorite.recipeId,
        }));

        setFavoriteRecipes(transformedFavorites);
      } catch (error) {
        console.log("Error loading favorites:", error);
        Alert.alert("Error", "Failed to load favorites. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      loadFavorites();
    }
  }, [user?.id]);

  const handleSignOut = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: signOut },
    ]);
  };

  if (loading) return <LoadingSpinner message="Loading your favorites..." />;

  return (
    <View style={favoritesStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={favoritesStyles.header}>
          <Text style={favoritesStyles.title}>Favorites</Text>
          <TouchableOpacity style={favoritesStyles.logoutButton} onPress={handleSignOut}>
            <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
          </TouchableOpacity>
        </View>

        <View style={favoritesStyles.recipesSection}>
          {favoriteRecipes.length > 0 ? (
            <FlatList
              data={favoriteRecipes}
              renderItem={({ item }) => <RecipeCard recipe={item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              columnWrapperStyle={favoritesStyles.row}
              contentContainerStyle={favoritesStyles.recipesGrid}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            <NoFavoritesFound />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default FavoritesScreen;
